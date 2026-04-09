// ImageUpload.jsx — Logo and Seal upload component

import React, { useRef } from 'react';

export default function ImageUpload({ label, value, onChange, placeholder = 'Click to upload image' }) {
  const inputRef = useRef();

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onChange(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label className="form-label">{label}</label>
      <div
        className="upload-zone"
        onClick={() => inputRef.current.click()}
        style={{ minHeight: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer' }}
      >
        {value ? (
          <>
            <img src={value} alt={label} style={{ maxHeight: 52, maxWidth: '100%', objectFit: 'contain', borderRadius: 4 }} />
            <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Click to change</span>
          </>
        ) : (
          <>
            <span style={{ fontSize: 22 }}>📷</span>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{placeholder}</span>
          </>
        )}
        {value && (
          <button
            onClick={(e) => { e.stopPropagation(); onChange(null); }}
            className="btn btn-danger btn-xs"
            style={{ marginTop: 4 }}
          >✕ Remove</button>
        )}
      </div>
      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
    </div>
  );
}
