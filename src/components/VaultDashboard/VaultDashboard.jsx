// VaultDashboard.jsx — saved invoices list with search, filter, CRUD

import React, { useState } from 'react';
import { deleteInvoice } from '../../utils/vault.js';

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch { return iso; }
}

export default function VaultDashboard({ vault, onLoad, onRefresh, onNewInvoice }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [confirmDelete, setConfirmDelete] = useState(null);

  const filtered = vault.filter(inv => {
    const matchSearch =
      (inv.name || '').toLowerCase().includes(search.toLowerCase()) ||
      (inv.companyDetails?.name || '').toLowerCase().includes(search.toLowerCase()) ||
      (inv.invoiceDetails?.invoiceNo || '').toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || inv.status === filter;
    return matchSearch && matchFilter;
  });

  const handleDelete = (id) => {
    deleteInvoice(id);
    setConfirmDelete(null);
    onRefresh();
  };

  return (
    <div style={{ padding: 24, height: '100%', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            🗄️ Invoice Vault
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>
            {vault.length} saved invoice{vault.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button className="btn btn-primary" onClick={onNewInvoice}>
          ＋ New Invoice
        </button>
      </div>

      {/* Search & Filter */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <input
          className="form-input"
          placeholder="🔍 Search by name, company, invoice no..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1 }}
        />
        <div style={{ display: 'flex', gap: 6 }}>
          {['all', 'draft', 'final', 'template'].map(f => (
            <button
              key={f}
              className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter(f)}
              style={{ textTransform: 'capitalize' }}
            >{f}</button>
          ))}
        </div>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '60px 20px',
          color: 'var(--text-muted)',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 12
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🗂️</div>
          <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
            {search || filter !== 'all' ? 'No matching invoices' : 'Vault is empty'}
          </p>
          <p style={{ fontSize: 13 }}>
            {search || filter !== 'all' ? 'Try a different search or filter.' : 'Fill in the form and save your first invoice.'}
          </p>
          {!search && filter === 'all' && (
            <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={onNewInvoice}>
              ＋ Create Invoice
            </button>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {filtered.map(inv => {
            const total = (() => {
              const items = inv.items || [];
              const sub = items.reduce((s, i) => s + parseFloat(i.quantity || 0) * parseFloat(i.rate || 0), 0);
              const vat = sub * parseFloat(inv.totals?.vatPercent || 0) / 100;
              return (sub + vat).toFixed(2);
            })();

            return (
              <div key={inv.id} className="vault-card fade-in">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span className={`badge badge-${inv.status || 'draft'}`}>
                        {inv.status || 'draft'}
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {inv.name || inv.invoiceDetails?.invoiceNo || 'Untitled Invoice'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                        🏢 {inv.companyDetails?.name || '—'}
                      </span>
                      <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                        📋 {inv.invoiceDetails?.invoiceNo || '—'}
                      </span>
                      <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                        📅 {formatDate(inv.invoiceDetails?.dated)}
                      </span>
                      <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                        📦 {(inv.items || []).length} item(s)
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--accent-light)' }}>₹ {total}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Updated {formatDate(inv.updatedAt)}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                  <button className="btn btn-primary btn-sm" onClick={() => onLoad(inv)}>
                    ✏️ Edit / Load
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onLoad({ ...inv, id: undefined, name: (inv.name || 'Invoice') + ' (Copy)', status: 'draft' })}
                  >
                    📋 Copy
                  </button>
                  {confirmDelete === inv.id ? (
                    <>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(inv.id)}>
                        ✓ Confirm Delete
                      </button>
                      <button className="btn btn-secondary btn-sm" onClick={() => setConfirmDelete(null)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button className="btn btn-danger btn-sm" onClick={() => setConfirmDelete(inv.id)}>
                      🗑️ Delete
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
