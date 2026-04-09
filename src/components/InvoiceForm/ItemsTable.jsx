// ItemsTable.jsx — dynamic add/remove item rows with auto-calculation

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const EMPTY_ITEM = () => ({ id: uuidv4(), description: '', sku: '', quantity: '', rate: '', per: 'Nos', amount: 0 });

export default function ItemsTable({ items, onChange }) {
  const rows = items.length > 0 ? items : [];

  const addRow = () => onChange([...rows, EMPTY_ITEM()]);

  const removeRow = (id) => onChange(rows.filter(r => r.id !== id));

  const updateRow = (id, field, val) => {
    onChange(rows.map(r => {
      if (r.id !== id) return r;
      const updated = { ...r, [field]: val };
      updated.amount = (parseFloat(updated.quantity || 0) * parseFloat(updated.rate || 0)).toFixed(2);
      return updated;
    }));
  };

  const subtotal = rows.reduce((s, r) => s + parseFloat(r.amount || 0), 0);

  const inputStyle = {
    background: 'var(--bg-primary)',
    border: '1px solid var(--border)',
    borderRadius: 5,
    padding: '4px 6px',
    color: 'var(--text-primary)',
    fontSize: 12,
    width: '100%',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
  };

  const thStyle = {
    padding: '8px 6px',
    fontSize: 11,
    fontWeight: 700,
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: '1px solid var(--border)',
    textAlign: 'left',
    whiteSpace: 'nowrap'
  };

  const tdStyle = {
    padding: '5px 4px',
    verticalAlign: 'middle',
    borderBottom: '1px solid var(--border)',
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ overflowX: 'auto', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
          <thead>
            <tr style={{ background: 'rgba(99,102,241,0.05)' }}>
              <th style={{ ...thStyle, width: 30 }}>#</th>
              <th style={{ ...thStyle }}>Description</th>
              <th style={{ ...thStyle, width: 70 }}>SKU</th>
              <th style={{ ...thStyle, width: 70 }}>Qty</th>
              <th style={{ ...thStyle, width: 80 }}>Rate</th>
              <th style={{ ...thStyle, width: 55 }}>Per</th>
              <th style={{ ...thStyle, width: 90 }}>Amount</th>
              <th style={{ ...thStyle, width: 36 }}></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={8} style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)', fontSize: 13 }}>
                  No items yet — click "Add Row" below
                </td>
              </tr>
            ) : rows.map((row, idx) => (
              <tr key={row.id} className="fade-in">
                <td style={{ ...tdStyle, color: 'var(--text-muted)', fontSize: 12, textAlign: 'center' }}>{idx + 1}</td>
                <td style={tdStyle}>
                  <input style={inputStyle} value={row.description} onChange={e => updateRow(row.id, 'description', e.target.value)} placeholder="Item description" />
                </td>
                <td style={tdStyle}>
                  <input style={inputStyle} value={row.sku} onChange={e => updateRow(row.id, 'sku', e.target.value)} placeholder="SKU" />
                </td>
                <td style={tdStyle}>
                  <input style={{ ...inputStyle, textAlign: 'right' }} type="number" value={row.quantity} onChange={e => updateRow(row.id, 'quantity', e.target.value)} placeholder="0" />
                </td>
                <td style={tdStyle}>
                  <input style={{ ...inputStyle, textAlign: 'right' }} type="number" value={row.rate} onChange={e => updateRow(row.id, 'rate', e.target.value)} placeholder="0.00" />
                </td>
                <td style={tdStyle}>
                  <input style={inputStyle} value={row.per} onChange={e => updateRow(row.id, 'per', e.target.value)} placeholder="Nos" />
                </td>
                <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 600, color: 'var(--text-primary)', fontSize: 13 }}>
                  {parseFloat(row.amount || 0).toFixed(2)}
                </td>
                <td style={{ ...tdStyle, textAlign: 'center' }}>
                  <button
                    onClick={() => removeRow(row.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer', fontSize: 16, padding: '2px 4px', borderRadius: 4, lineHeight: 1 }}
                    title="Remove row"
                  >✕</button>
                </td>
              </tr>
            ))}
          </tbody>
          {rows.length > 0 && (
            <tfoot>
              <tr style={{ background: 'rgba(99,102,241,0.05)' }}>
                <td colSpan={6} style={{ padding: '8px 6px', textAlign: 'right', fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)' }}>Subtotal</td>
                <td style={{ padding: '8px 6px', textAlign: 'right', fontSize: 14, fontWeight: 700, color: 'var(--accent-light)' }}>
                  {subtotal.toFixed(2)}
                </td>
                <td></td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
      <div style={{ marginTop: 10 }}>
        <button className="btn btn-secondary btn-sm" onClick={addRow}>
          ＋ Add Row
        </button>
      </div>
    </div>
  );
}
