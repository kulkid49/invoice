// renderInvoice.js — fills {{TOKEN}} placeholders with invoice data

import { INVOICE_TEMPLATE } from '../template/invoiceTemplate.js';
import { numberToWords } from './numberToWords.js';

function esc(val) {
  if (val === null || val === undefined) return '';
  return String(val)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildItemRows(items) {
  if (!items || items.length === 0) {
    return `<tr>
      <td>&nbsp;</td>
      <td colspan=4>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>`;
  }

  return items.map((item, idx) => {
    const amount = (parseFloat(item.quantity || 0) * parseFloat(item.rate || 0)).toFixed(2);
    return `<tr>
     <td class="text-center">${idx + 1}</td>
     <td colspan=4>${esc(item.description)}</td>
     <td class="text-center">${esc(item.sku)}</td>
     <td class="text-right">${esc(item.quantity)}</td>
     <td class="text-right">${esc(item.rate)}</td>
     <td class="text-right">${esc(item.per)}</td>
     <td class="text-right font-bold">${amount}</td>
    </tr>`;
  }).join('\n');
}

function buildLogoCellHTML(logoBase64) {
  if (logoBase64) {
    return `<p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;line-height:normal'>
      <img src="${logoBase64}" style="max-width:180px;max-height:120px;object-fit:contain;" alt="Logo"/>
    </p>`;
  }
  return `<p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;line-height:normal'>
    <span lang=EN-IN style='font-family:"Calibri",sans-serif;color:#999'>+Add Business Logo</span>
  </p>`;
}

function buildSealCellHTML(sealBase64) {
  if (sealBase64) {
    return `<img src="${sealBase64}" style="max-width:200px;max-height:120px;object-fit:contain;margin-bottom:4px;" alt="Seal"/>`;
  }
  return `&nbsp;`;
}

export function renderInvoice(data) {
  const { companyDetails = {}, invoiceDetails = {}, consigneeDetails = {}, buyerDetails = {}, items = [], totals = {}, logoBase64, sealBase64 } = data;

  // Calculate totals
  const subtotal = items.reduce((sum, item) => {
    return sum + (parseFloat(item.quantity || 0) * parseFloat(item.rate || 0));
  }, 0);

  const taxType = totals.taxType || 'VAT';
  const taxPercent = parseFloat(totals.taxPercent || 0);
  const totalTaxAmount = (subtotal * taxPercent / 100).toFixed(2);
  const grandTotal = (subtotal + parseFloat(totalTaxAmount)).toFixed(2);
  const subtotalQty = items.reduce((sum, i) => sum + parseFloat(i.quantity || 0), 0);

  const amountInWords = numberToWords(grandTotal);
  const taxAmountWords = numberToWords(totalTaxAmount);

  // Build Tax Rows
  let taxRowsHTML = '';
  if (taxType === 'GST') {
    const halfPercent = (taxPercent / 2);
    const halfAmount = (parseFloat(totalTaxAmount) / 2).toFixed(2);

    // CGST Row
    taxRowsHTML += `<tr>
      <td class="no-border-top no-border-bottom"></td>
      <td colspan="4" class="text-right font-bold font-italic">CGST</td>
      <td class="no-border-left no-border-right"></td>
      <td class="no-border-left no-border-right"></td>
      <td class="text-right">${halfPercent}%</td>
      <td class="no-border-left no-border-right"></td>
      <td class="text-right font-bold">${halfAmount}</td>
    </tr>`;

    // SGST Row
    taxRowsHTML += `<tr>
      <td class="no-border-top no-border-bottom"></td>
      <td colspan="4" class="text-right font-bold font-italic">SGST</td>
      <td class="no-border-left no-border-right"></td>
      <td class="no-border-left no-border-right"></td>
      <td class="text-right">${halfPercent}%</td>
      <td class="no-border-left no-border-right"></td>
      <td class="text-right font-bold">${halfAmount}</td>
    </tr>`;
  } else {
    // VAT Row (default)
    taxRowsHTML = `<tr>
      <td class="no-border-top no-border-bottom"></td>
      <td colspan="4" class="text-right font-bold font-italic">VAT</td>
      <td class="no-border-left no-border-right"></td>
      <td class="no-border-left no-border-right"></td>
      <td class="text-right">${taxPercent}%</td>
      <td class="no-border-left no-border-right"></td>
      <td class="text-right font-bold">${totalTaxAmount}</td>
    </tr>`;
  }

  const html = INVOICE_TEMPLATE
    .replace('{{LOGO_CELL}}', buildLogoCellHTML(logoBase64))
    .replace('{{SEAL_CELL}}', buildSealCellHTML(sealBase64))
    .replace(/{{COMPANY_NAME}}/g, esc(companyDetails.name))
    .replace(/{{COMPANY_ADDRESS}}/g, esc(companyDetails.address))
    .replace(/{{VAT_NO}}/g, esc(companyDetails.vatNo))
    .replace(/{{STATE}}/g, esc(companyDetails.state))
    .replace(/{{PIN_CODE}}/g, esc(companyDetails.pinCode))
    .replace(/{{CONTACT}}/g, esc(companyDetails.contact))
    .replace(/{{EMAIL}}/g, esc(companyDetails.email))
    .replace(/{{INVOICE_NO}}/g, esc(invoiceDetails.invoiceNo))
    .replace(/{{DATED}}/g, esc(invoiceDetails.dated))
    .replace(/{{DELIVERY_NOTE}}/g, esc(invoiceDetails.deliveryNote))
    .replace(/{{PAYMENT_TERMS}}/g, esc(invoiceDetails.paymentTerms))
    .replace(/{{REF_NO_DATE}}/g, esc(invoiceDetails.refNoDate))
    .replace(/{{OTHER_REF}}/g, esc(invoiceDetails.otherRef))
    .replace(/{{BUYERS_ORDER_NO}}/g, esc(invoiceDetails.buyersOrderNo))
    .replace(/{{BUYERS_ORDER_DATED}}/g, esc(invoiceDetails.buyersOrderDated))
    .replace(/{{DISPATCH_DOC_NO}}/g, esc(invoiceDetails.dispatchDocNo))
    .replace(/{{DELIVERY_NOTE_DATE}}/g, esc(invoiceDetails.deliveryNoteDate))
    .replace(/{{DISPATCHED_THROUGH}}/g, esc(invoiceDetails.dispatchedThrough))
    .replace(/{{DESTINATION}}/g, esc(invoiceDetails.destination))
    .replace(/{{BILL_OF_LADING}}/g, esc(invoiceDetails.billOfLading))
    .replace(/{{MOTOR_VEHICLE_NO}}/g, esc(invoiceDetails.motorVehicleNo))
    .replace(/{{TERMS_OF_DELIVERY}}/g, esc(invoiceDetails.termsOfDelivery))
    .replace(/{{CONSIGNEE_NAME}}/g, esc(consigneeDetails.name))
    .replace(/{{CONSIGNEE_ADDRESS}}/g, esc(consigneeDetails.address))
    .replace(/{{CONSIGNEE_GSTIN}}/g, esc(consigneeDetails.gstin))
    .replace(/{{CONSIGNEE_STATE}}/g, esc(consigneeDetails.state))
    .replace(/{{CONSIGNEE_PIN}}/g, esc(consigneeDetails.pinCode))
    .replace(/{{BUYER_NAME}}/g, esc(buyerDetails.name))
    .replace(/{{BUYER_ADDRESS}}/g, esc(buyerDetails.address))
    .replace(/{{BUYER_GSTIN}}/g, esc(buyerDetails.gstin))
    .replace(/{{BUYER_STATE}}/g, esc(buyerDetails.state))
    .replace(/{{BUYER_PIN}}/g, esc(buyerDetails.pinCode))
    .replace('{{ITEMS_ROWS}}', buildItemRows(items))
    .replace('{{TAX_ROWS}}', taxRowsHTML)
    .replace(/{{SUBTOTAL_QTY}}/g, subtotalQty || '')
    .replace(/{{GRAND_TOTAL}}/g, parseFloat(grandTotal) ? grandTotal : '')
    .replace(/{{AMOUNT_IN_WORDS}}/g, amountInWords)
    .replace(/{{TAX_AMOUNT_WORDS}}/g, taxAmountWords);

  return html;
}
