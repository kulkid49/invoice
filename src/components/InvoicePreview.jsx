// InvoicePreview.jsx — renders invoice HTML in an isolated iframe

import React, { useRef } from 'react';
import { renderInvoice } from '../utils/renderInvoice.js';

export default function InvoicePreview({ data, onDownloadPDF }) {
  const iframeRef = useRef();

  const html = renderInvoice(data);

  const handleDownloadPDF = () => {
    if (typeof onDownloadPDF === 'function') {
      onDownloadPDF(iframeRef.current);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Toolbar */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 14 }}>👁️</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>Live Preview</span>
          <span style={{
            fontSize: 10,
            background: 'rgba(16,185,129,0.15)',
            color: '#10b981',
            padding: '2px 7px',
            borderRadius: 99,
            fontWeight: 700
          }}>LIVE</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-success btn-sm" onClick={handleDownloadPDF}>
            ⬇️ Download PDF
          </button>
        </div>
      </div>

      {/* Preview area */}
      <div className="preview-panel" style={{ flex: 1 }}>
        <div style={{
          background: 'white',
          boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
          borderRadius: 4,
          width: '100%',
          maxWidth: 820,
          minHeight: 500
        }}>
          <iframe
            ref={iframeRef}
            srcDoc={html}
            style={{
              width: '100%',
              minHeight: 900,
              border: 'none',
              borderRadius: 4,
              display: 'block'
            }}
            title="Invoice Preview"
            sandbox="allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
}
