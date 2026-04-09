// vault.js — LocalStorage CRUD for saved invoices

const VAULT_KEY = 'invoice_vault';

export function loadVault() {
  try {
    const raw = localStorage.getItem(VAULT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveVault(invoices) {
  localStorage.setItem(VAULT_KEY, JSON.stringify(invoices));
}

export function saveInvoice(invoice) {
  const vault = loadVault();
  const existing = vault.findIndex(i => i.id === invoice.id);
  const now = new Date().toISOString();
  if (existing >= 0) {
    vault[existing] = { ...invoice, updatedAt: now };
  } else {
    vault.unshift({ ...invoice, createdAt: now, updatedAt: now });
  }
  saveVault(vault);
  return vault;
}

export function deleteInvoice(id) {
  const vault = loadVault().filter(i => i.id !== id);
  saveVault(vault);
  return vault;
}

export function getInvoice(id) {
  return loadVault().find(i => i.id === id) || null;
}
