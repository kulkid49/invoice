// App.jsx — main application shell

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InvoiceForm from './components/InvoiceForm/InvoiceForm.jsx';
import InvoicePreview from './components/InvoicePreview.jsx';
import VaultDashboard from './components/VaultDashboard/VaultDashboard.jsx';
import { saveInvoice, loadVault } from './utils/vault.js';
import { renderInvoice } from './utils/renderInvoice.js';

const BLANK_INVOICE = () => ({
  id: uuidv4(),
  name: '',
  status: 'draft',
  companyDetails: {},
  invoiceDetails: { dated: new Date().toISOString().split('T')[0] },
  consigneeDetails: {},
  buyerDetails: {},
  items: [],
  totals: { taxType: 'VAT', taxPercent: '' },
  logoBase64: null,
  sealBase64: null,
  createdAt: null,
  updatedAt: null,
});

function validate(data) {
  const errors = {};
  if (!data.companyDetails?.name?.trim()) errors.companyName = 'Required';
  if (!data.invoiceDetails?.invoiceNo?.trim()) errors.invoiceNo = 'Required';
  if (!data.invoiceDetails?.dated) errors.dated = 'Required';
  if (!data.buyerDetails?.name?.trim()) errors.buyerName = 'Required';
  if (!data.consigneeDetails?.name?.trim()) errors.consigneeName = 'Required';
  return errors;
}

export default function App() {
  const [view, setView] = useState('editor'); // 'editor' | 'vault'
  const [invoiceData, setInvoiceData] = useState(BLANK_INVOICE);
  const [vault, setVault] = useState([]);
  const [errors, setErrors] = useState({});
  const [saveStatus, setSaveStatus] = useState(''); // message
  const [saveModal, setSaveModal] = useState(false);
  const [invoiceName, setInvoiceName] = useState('');
  const [invoiceStatus, setInvoiceStatus] = useState('draft');
  const autoSaveTimer = useRef(null);

  // Load vault on mount
  useEffect(() => { setVault(loadVault()); }, []);

  // Auto-save draft debounced
  useEffect(() => {
    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    autoSaveTimer.current = setTimeout(() => {
      if (invoiceData.companyDetails?.name || invoiceData.invoiceDetails?.invoiceNo) {
        const cur = { ...invoiceData, name: invoiceData.name || 'Auto-saved Draft', status: 'draft' };
        const updated = saveInvoice(cur);
        setVault(updated);
        setSaveStatus('Auto-saved');
        setTimeout(() => setSaveStatus(''), 2000);
      }
    }, 2500);
    return () => clearTimeout(autoSaveTimer.current);
  }, [invoiceData]);

  const handleSave = (status) => {
    const errs = validate(invoiceData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setSaveStatus('⚠️ Please fill required fields');
      setTimeout(() => setSaveStatus(''), 3000);
      return;
    }
    setErrors({});
    const toSave = {
      ...invoiceData,
      name: invoiceName || invoiceData.invoiceDetails?.invoiceNo || 'Invoice',
      status: status || invoiceStatus,
    };
    const updated = saveInvoice(toSave);
    setVault(updated);
    setInvoiceData(toSave);
    setSaveModal(false);
    setSaveStatus(`✓ Saved as ${toSave.status}`);
    setTimeout(() => setSaveStatus(''), 3000);
  };

  const handleLoadInvoice = (inv) => {
    // If it's a copy, assign new id
    const loaded = inv.id ? inv : { ...inv, id: uuidv4() };
    setInvoiceData(loaded);
    setInvoiceName(loaded.name || '');
    setInvoiceStatus(loaded.status || 'draft');
    setView('editor');
    setErrors({});
  };

  const handleNewInvoice = () => {
    setInvoiceData(BLANK_INVOICE());
    setInvoiceName('');
    setInvoiceStatus('draft');
    setErrors({});
    setView('editor');
  };

  const handleDownloadPDF = async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    const htmlString = renderInvoice(invoiceData);

    const container = document.createElement('div');
    container.innerHTML = htmlString;
    container.style.background = 'white';
    document.body.appendChild(container);

    const invoiceNo = invoiceData.invoiceDetails?.invoiceNo || 'invoice';
    const filename = `${invoiceNo}_${new Date().toISOString().split('T')[0]}.pdf`;

    await html2pdf()
      .set({
        margin: [8, 8, 8, 8],
        filename,
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: 'avoid-all' }
      })
      .from(container)
      .save();

    document.body.removeChild(container);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <span style={{ fontSize: 20 }}>📄</span>
          <span>InvoiceGen</span>
        </div>

        <button className={`nav-item ${view === 'editor' ? 'active' : ''}`} onClick={() => setView('editor')}>
          <span>✏️</span> Editor
        </button>
        <button className={`nav-item ${view === 'vault' ? 'active' : ''}`} onClick={() => { setView('vault'); setVault(loadVault()); }}>
          <span>🗄️</span> Vault
          {vault.length > 0 && (
            <span style={{
              marginLeft: 'auto',
              background: 'var(--accent)',
              color: 'white',
              fontSize: 10,
              fontWeight: 700,
              borderRadius: 99,
              padding: '1px 6px'
            }}>{vault.length}</span>
          )}
        </button>

        <div style={{ flex: 1 }} />

        {/* Save controls at bottom of sidebar */}
        {view === 'editor' && (
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <button className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSaveModal(true)}>
              💾 Save Invoice
            </button>
            <button className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }} onClick={handleNewInvoice}>
              ＋ New
            </button>
            {saveStatus && (
              <p style={{ fontSize: 11, color: saveStatus.startsWith('⚠') ? 'var(--danger)' : 'var(--success)', textAlign: 'center', marginTop: 2 }}>
                {saveStatus}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Main content */}
      {view === 'vault' ? (
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <VaultDashboard
            vault={vault}
            onLoad={handleLoadInvoice}
            onRefresh={() => setVault(loadVault())}
            onNewInvoice={handleNewInvoice}
          />
        </div>
      ) : (
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          {/* Form panel */}
          <div style={{ width: '42%', minWidth: 380, borderRight: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Form header */}
            <div style={{
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border)',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              flexShrink: 0
            }}>
              <span style={{ fontSize: 14 }}>📝</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>Invoice Form</span>
              {invoiceData.name && (
                <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 4 }}>
                  — {invoiceData.name}
                </span>
              )}
              <span className={`badge badge-${invoiceData.status || 'draft'}`} style={{ marginLeft: 'auto' }}>
                {invoiceData.status || 'draft'}
              </span>
            </div>
            {/* Form body */}
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <InvoiceForm data={invoiceData} onChange={setInvoiceData} errors={errors} />
            </div>
          </div>

          {/* Preview panel */}
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <InvoicePreview data={invoiceData} onDownloadPDF={handleDownloadPDF} />
          </div>
        </div>
      )}

      {/* Save Modal */}
      {saveModal && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}
          onClick={e => { if (e.target === e.currentTarget) setSaveModal(false); }}
        >
          <div className="card fade-in" style={{ width: 420, maxWidth: '90vw' }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>💾 Save Invoice</h3>

            <div style={{ marginBottom: 12 }}>
              <label className="form-label">Invoice Name</label>
              <input
                className="form-input"
                value={invoiceName}
                onChange={e => setInvoiceName(e.target.value)}
                placeholder={invoiceData.invoiceDetails?.invoiceNo || 'My Invoice'}
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label className="form-label">Save As</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {['draft', 'final', 'template'].map(s => (
                  <button
                    key={s}
                    className={`btn btn-sm ${invoiceStatus === s ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setInvoiceStatus(s)}
                    style={{ textTransform: 'capitalize', flex: 1, justifyContent: 'center' }}
                  >{s}</button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button className="btn btn-secondary" onClick={() => setSaveModal(false)}>Cancel</button>
              <button className="btn btn-success" onClick={() => handleSave(invoiceStatus)}>
                ✓ Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
