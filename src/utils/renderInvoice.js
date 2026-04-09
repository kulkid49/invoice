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
    return `<tr style='height:30pt'>
      <td style='border-left:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0in 5.4pt'>&nbsp;</td>
      <td colspan=4 style='border-right:solid black 1.0pt;padding:0in 5.4pt'>&nbsp;</td>
      <td style='border-right:solid windowtext 1.0pt;padding:0in 5.4pt'>&nbsp;</td>
      <td style='border-right:solid windowtext 1.0pt;padding:0in 5.4pt'>&nbsp;</td>
      <td style='border-right:solid windowtext 1.0pt;padding:0in 5.4pt'>&nbsp;</td>
      <td style='border-right:solid windowtext 1.0pt;padding:0in 5.4pt'>&nbsp;</td>
      <td style='border-right:solid windowtext 1.0pt;padding:0in 5.4pt'>&nbsp;</td>
      <td style='padding:0in 0in 0in 0in'></td><td width=0></td>
    </tr>`;
  }

  return items.map((item, idx) => {
    const amount = (parseFloat(item.quantity || 0) * parseFloat(item.rate || 0)).toFixed(2);
    return `<tr style='height:14.75pt'>
     <td width=104 nowrap valign=top style='width:77.65pt;border-top:none;
     border-left:solid windowtext 1.0pt;border-bottom:none;border-right:solid windowtext 1.0pt;
     padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
     <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;line-height:normal'><span
     lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>${idx + 1}</span></p>
     </td>
     <td width=325 colspan=4 valign=top style='width:243.8pt;border:none;
     border-right:solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
     <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
     lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>${esc(item.description)}</span></p>
     </td>
     <td width=61 nowrap valign=top style='width:45.4pt;border:none;border-right:
     solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
     <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;line-height:normal'><span
     lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>${esc(item.sku)}</span></p>
     </td>
     <td width=74 nowrap valign=top style='width:55.45pt;border:none;border-right:
     solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
     <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;line-height:normal'><span
     lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>${esc(item.quantity)}</span></p>
     </td>
     <td width=46 nowrap valign=top style='width:34.65pt;border:none;border-right:
     solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
     <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;line-height:normal'><span
     lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>${esc(item.rate)}</span></p>
     </td>
     <td width=51 nowrap valign=top style='width:38.15pt;border:none;border-right:
     solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
     <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;line-height:normal'><span
     lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>${esc(item.per)}</span></p>
     </td>
     <td width=79 nowrap valign=top style='width:59.0pt;border:none;border-right:
     solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
     <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;line-height:normal'><span
     lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>${amount}</span></p>
     </td>
     <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
     <td style='height:14.75pt;border:none' width=0 height=20></td>
    </tr>`;
  }).join('\n');
}

function buildLogoCellHTML(logoBase64) {
  if (logoBase64) {
    return `<p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;line-height:normal'>
      <img src="${logoBase64}" style="max-width:90px;max-height:60px;object-fit:contain;" alt="Logo"/>
    </p>`;
  }
  return `<p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;line-height:normal'>
    <span lang=EN-IN style='font-family:"Calibri",sans-serif;color:#999'>+Add Business Logo</span>
  </p>`;
}

function buildSealCellHTML(sealBase64) {
  if (sealBase64) {
    return `<img src="${sealBase64}" style="max-width:100px;max-height:60px;object-fit:contain;margin-bottom:4px;" alt="Seal"/>`;
  }
  return `&nbsp;`;
}

export function renderInvoice(data) {
  const { companyDetails = {}, invoiceDetails = {}, consigneeDetails = {}, buyerDetails = {}, items = [], totals = {}, logoBase64, sealBase64 } = data;

  // Calculate totals
  const subtotal = items.reduce((sum, item) => {
    return sum + (parseFloat(item.quantity || 0) * parseFloat(item.rate || 0));
  }, 0);
  const vatPercent = parseFloat(totals.vatPercent || 0);
  const vatAmount = (subtotal * vatPercent / 100).toFixed(2);
  const grandTotal = (subtotal + parseFloat(vatAmount)).toFixed(2);
  const subtotalQty = items.reduce((sum, i) => sum + parseFloat(i.quantity || 0), 0);

  const amountInWords = numberToWords(grandTotal);
  const taxAmountWords = numberToWords(vatAmount);

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
    .replace(/{{VAT_PERCENT}}/g, vatPercent || '')
    .replace(/{{VAT_AMOUNT}}/g, parseFloat(vatAmount) ? vatAmount : '')
    .replace(/{{SUBTOTAL_QTY}}/g, subtotalQty || '')
    .replace(/{{GRAND_TOTAL}}/g, parseFloat(grandTotal) ? grandTotal : '')
    .replace(/{{AMOUNT_IN_WORDS}}/g, amountInWords)
    .replace(/{{TAX_AMOUNT_WORDS}}/g, taxAmountWords);

  return html;
}
