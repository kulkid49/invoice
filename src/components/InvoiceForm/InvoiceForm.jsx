// InvoiceForm.jsx — master form container with all sections

import React from 'react';
import ImageUpload from '../ImageUpload.jsx';
import ItemsTable from './ItemsTable.jsx';

function Field({ label, id, value, onChange, placeholder, type = 'text', required, error }) {
  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {label}{required && <span style={{ color: 'var(--danger)', marginLeft: 2 }}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        className={`form-input${error ? ' border-red-500' : ''}`}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={error ? { borderColor: 'var(--danger)' } : {}}
      />
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}

function Select({ label, id, value, onChange, options, required, error }) {
  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {label}{required && <span style={{ color: 'var(--danger)', marginLeft: 2 }}>*</span>}
      </label>
      <select
        id={id}
        className={`form-input${error ? ' border-red-500' : ''}`}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        style={error ? { borderColor: 'var(--danger)' } : {}}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}

function TextArea({ label, id, value, onChange, placeholder, rows = 2 }) {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className="form-input"
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        style={{ resize: 'vertical' }}
      />
    </div>
  );
}

function SectionHeader({ icon, title }) {
  return (
    <div className="section-header">
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
}

function Grid({ children, cols = 2 }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: '12px',
      marginBottom: 12
    }}>
      {children}
    </div>
  );
}

export default function InvoiceForm({ data, onChange, errors = {} }) {
  const { companyDetails = {}, invoiceDetails = {}, consigneeDetails = {}, buyerDetails = {}, items = [], totals = {}, logoBase64, sealBase64 } = data;

  const setNested = (key, field, val) => {
    onChange({ ...data, [key]: { ...data[key], [field]: val } });
  };

  const co = (field, val) => setNested('companyDetails', field, val);
  const inv = (field, val) => setNested('invoiceDetails', field, val);
  const cons = (field, val) => setNested('consigneeDetails', field, val);
  const buy = (field, val) => setNested('buyerDetails', field, val);
  const tot = (field, val) => setNested('totals', field, val);

  return (
    <div className="form-panel" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

      {/* ── LOGO & SEAL ── */}
      <SectionHeader icon="🖼️" title="Logo & Seal" />
      <Grid cols={2}>
        <ImageUpload label="Business Logo" value={logoBase64} onChange={v => onChange({ ...data, logoBase64: v })} placeholder="Upload logo (PNG/JPG)" />
        <ImageUpload label="Authorised Seal / Signature" value={sealBase64} onChange={v => onChange({ ...data, sealBase64: v })} placeholder="Upload seal or signature" />
      </Grid>

      {/* ── COMPANY DETAILS ── */}
      <SectionHeader icon="🏢" title="Company Details" />
      <Grid cols={1}>
        <Field label="Company Name" id="co-name" value={companyDetails.name} onChange={v => co('name', v)} placeholder="Your Company Pvt. Ltd." required error={errors['companyName']} />
      </Grid>
      <Grid cols={1}>
        <TextArea label="Address" id="co-addr" value={companyDetails.address} onChange={v => co('address', v)} placeholder="Full address" rows={2} />
      </Grid>
      <Grid cols={2}>
        <Field label="VAT / GSTIN" id="co-vat" value={companyDetails.vatNo} onChange={v => co('vatNo', v)} placeholder="22AAAAA0000A1Z5" error={errors['vatNo']} />
        <Field label="Contact" id="co-contact" value={companyDetails.contact} onChange={v => co('contact', v)} placeholder="+91 99999 99999" />
      </Grid>
      <Grid cols={2}>
        <Field label="State" id="co-state" value={companyDetails.state} onChange={v => co('state', v)} placeholder="Maharashtra" />
        <Field label="Pin Code" id="co-pin" value={companyDetails.pinCode} onChange={v => co('pinCode', v)} placeholder="400001" />
      </Grid>
      <Grid cols={1}>
        <Field label="Email" id="co-email" type="email" value={companyDetails.email} onChange={v => co('email', v)} placeholder="billing@company.com" />
      </Grid>

      {/* ── INVOICE DETAILS ── */}
      <SectionHeader icon="📋" title="Invoice Details" />
      <Grid cols={2}>
        <Field label="Invoice No." id="inv-no" value={invoiceDetails.invoiceNo} onChange={v => inv('invoiceNo', v)} placeholder="INV-2024-001" required error={errors['invoiceNo']} />
        <Field label="Date" id="inv-date" type="date" value={invoiceDetails.dated} onChange={v => inv('dated', v)} required error={errors['dated']} />
      </Grid>
      <Grid cols={2}>
        <Field label="Delivery Note" id="inv-dn" value={invoiceDetails.deliveryNote} onChange={v => inv('deliveryNote', v)} placeholder="DN-001" />
        <Field label="Mode / Terms of Payment" id="inv-pay" value={invoiceDetails.paymentTerms} onChange={v => inv('paymentTerms', v)} placeholder="Net 30 / Cash" />
      </Grid>
      <Grid cols={2}>
        <Field label="Reference No. & Date" id="inv-ref" value={invoiceDetails.refNoDate} onChange={v => inv('refNoDate', v)} placeholder="REF-001, 01-Jan-2024" />
        <Field label="Other References" id="inv-oref" value={invoiceDetails.otherRef} onChange={v => inv('otherRef', v)} placeholder="PO-9999" />
      </Grid>
      <Grid cols={2}>
        <Field label="Buyer's Order No." id="inv-bo" value={invoiceDetails.buyersOrderNo} onChange={v => inv('buyersOrderNo', v)} placeholder="BO-001" />
        <Field label="Buyer's Order Dated" id="inv-bod" type="date" value={invoiceDetails.buyersOrderDated} onChange={v => inv('buyersOrderDated', v)} />
      </Grid>
      <Grid cols={2}>
        <Field label="Dispatch Doc No." id="inv-dd" value={invoiceDetails.dispatchDocNo} onChange={v => inv('dispatchDocNo', v)} placeholder="DD-001" />
        <Field label="Delivery Note Date" id="inv-dnd" type="date" value={invoiceDetails.deliveryNoteDate} onChange={v => inv('deliveryNoteDate', v)} />
      </Grid>
      <Grid cols={2}>
        <Field label="Dispatched Through" id="inv-dt" value={invoiceDetails.dispatchedThrough} onChange={v => inv('dispatchedThrough', v)} placeholder="DTDC / Road" />
        <Field label="Destination" id="inv-dest" value={invoiceDetails.destination} onChange={v => inv('destination', v)} placeholder="Mumbai" />
      </Grid>
      <Grid cols={2}>
        <Field label="Bill of Lading / LR-RR No." id="inv-bl" value={invoiceDetails.billOfLading} onChange={v => inv('billOfLading', v)} placeholder="BL-123" />
        <Field label="Motor Vehicle No." id="inv-mv" value={invoiceDetails.motorVehicleNo} onChange={v => inv('motorVehicleNo', v)} placeholder="MH01AB1234" />
      </Grid>
      <Grid cols={1}>
        <Field label="Terms of Delivery" id="inv-tod" value={invoiceDetails.termsOfDelivery} onChange={v => inv('termsOfDelivery', v)} placeholder="Ex-Works / FOB / CIF" />
      </Grid>

      {/* ── CONSIGNEE ── */}
      <SectionHeader icon="🚚" title="Consignee (Ship To)" />
      <Grid cols={1}>
        <Field label="Consignee Company Name" id="cons-name" value={consigneeDetails.name} onChange={v => cons('name', v)} placeholder="Receiver Pvt. Ltd." required error={errors['consigneeName']} />
      </Grid>
      <Grid cols={1}>
        <TextArea label="Consignee Address" id="cons-addr" value={consigneeDetails.address} onChange={v => cons('address', v)} placeholder="Delivery address" rows={2} />
      </Grid>
      <Grid cols={2}>
        <Field label="GSTIN / UIN" id="cons-gst" value={consigneeDetails.gstin} onChange={v => cons('gstin', v)} placeholder="22BBBBB0000B1Z5" />
        <Field label="State" id="cons-state" value={consigneeDetails.state} onChange={v => cons('state', v)} placeholder="Karnataka" />
      </Grid>
      <Grid cols={1}>
        <Field label="Pin Code" id="cons-pin" value={consigneeDetails.pinCode} onChange={v => cons('pinCode', v)} placeholder="560001" />
      </Grid>

      {/* ── BUYER ── */}
      <SectionHeader icon="🧾" title="Buyer (Bill To)" />
      <Grid cols={1}>
        <Field label="Buyer Company Name" id="buy-name" value={buyerDetails.name} onChange={v => buy('name', v)} placeholder="Buyer Corp Pvt. Ltd." required error={errors['buyerName']} />
      </Grid>
      <Grid cols={1}>
        <TextArea label="Buyer Address" id="buy-addr" value={buyerDetails.address} onChange={v => buy('address', v)} placeholder="Billing address" rows={2} />
      </Grid>
      <Grid cols={2}>
        <Field label="GSTIN / UIN" id="buy-gst" value={buyerDetails.gstin} onChange={v => buy('gstin', v)} placeholder="22CCCCC0000C1Z5" />
        <Field label="State" id="buy-state" value={buyerDetails.state} onChange={v => buy('state', v)} placeholder="Delhi" />
      </Grid>
      <Grid cols={1}>
        <Field label="Pin Code" id="buy-pin" value={buyerDetails.pinCode} onChange={v => buy('pinCode', v)} placeholder="110001" />
      </Grid>

      {/* ── ITEMS TABLE ── */}
      <SectionHeader icon="📦" title="Items / Goods" />
      <ItemsTable items={items} onChange={newItems => onChange({ ...data, items: newItems })} />

      {/* ── TAX & TOTALS ── */}
      <SectionHeader icon="💰" title="Tax & Totals" />
      <Grid cols={2}>
        <Select
          label="Tax Type"
          id="tot-tax-type"
          value={totals.taxType}
          onChange={v => tot('taxType', v)}
          options={[
            { label: 'VAT', value: 'VAT' },
            { label: 'GST', value: 'GST' }
          ]}
        />
        <Field
          label={`${totals.taxType || 'Tax'} %`}
          id="tot-tax-percent"
          type="number"
          value={totals.taxPercent}
          onChange={v => tot('taxPercent', v)}
          placeholder="18"
        />
      </Grid>
      <Grid cols={1}>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ width: '100%' }}>
            <label className="form-label">Grand Total (Auto-calculated)</label>
            <div style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '8px 12px',
              fontSize: 14,
              fontWeight: 700,
              color: 'var(--accent-light)',
              letterSpacing: '-0.02em'
            }}>
              ₹ {(() => {
                const sub = items.reduce((s, i) => s + parseFloat(i.quantity || 0) * parseFloat(i.rate || 0), 0);
                const tax = sub * parseFloat(totals.taxPercent || 0) / 100;
                return (sub + tax).toFixed(2);
              })()}
            </div>
          </div>
        </div>
      </Grid>

      <div style={{ height: 40 }} />
    </div>
  );
}
