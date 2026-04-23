// invoiceTemplate.js
// The original Invoice.html content with static placeholders replaced by {{TOKEN}} tokens.
// DO NOT alter the table structure, colspan/rowspan.

export const INVOICE_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
</head>
<body>
<div class="invoice-container">
<style>
  * { box-sizing: border-box; }
  .invoice-container {
    font-family: "Arial", sans-serif;
    color: #000;
    line-height: 1.4;
    font-size: 8pt;
    width: 794px; /* Exact A4 width in pixels at 96dpi */
    margin: 0;
    min-height: 1123px; /* Exact A4 height in pixels */
    background-color: #fdfaf3; /* Subtle papery tint */
    background-image: url("https://www.transparenttextures.com/patterns/paper-fibers.png");
    padding: 8mm;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .invoice-content {
    position: relative;
    z-index: 2;
  }
  .invoice-container table {
    width: 100%;
    border-collapse: collapse;
    margin: 0; /* Remove bottom margin to prevent shrinking/shifting */
    table-layout: fixed;
    border: 1px solid #000;
  }
  .invoice-container td {
    border: 1px solid #000;
    padding: 8px 10px;
    vertical-align: top;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  .header-cell {
    background: #7F7F7F;
    color: #fff;
    text-align: center;
    font-size: 14pt;
    font-weight: bold;
    padding: 10px;
  }
  .section-title {
    background: #FFF2CC;
    font-weight: bold;
    text-decoration: underline;
  }
  .font-bold { font-weight: bold; }
  .font-italic { font-style: italic; }
  .text-center { text-align: center; }
  .text-right { text-align: right; }
  .text-muted { color: #666; }
  .no-border-top { border-top: none; }
  .no-border-bottom { border-bottom: none; }
  .no-border-left { border-left: none; }
  .no-border-right { border-right: none; }
  .border-none { border: none; }
  
  /* Logo cell specific styling */
  .logo-cell {
    text-align: center;
    vertical-align: middle;
  }
  
  /* Table row height logic */
  .invoice-container tr { height: auto; }
  
  /* Footer alignment */
  .footer-row td {
    padding-top: 20px;
    padding-bottom: 10px;
    vertical-align: bottom;
  }
  
  @media print {
    body { 
      background: none; 
      padding: 0;
      margin: 0;
      -webkit-print-color-adjust: exact; 
      print-color-adjust: exact; 
    }
    .invoice-container {
      width: 210mm;
      height: 297mm;
      padding: 8mm;
      margin: 0;
      box-shadow: none;
      page-break-after: always;
    }
  }
</style>
  <div class="invoice-content">
    <table cellspacing=0 cellpadding=0>
    <!-- Main Title -->
    <tr>
      <td colspan="10" class="header-cell">Invoice</td>
    </tr>

    <!-- Company Info & Invoice Header -->
    <tr>
      <td colspan="2" rowspan="8" class="logo-cell no-border-top">
        {{LOGO_CELL}}
      </td>
      <td colspan="2" class="no-border-top no-border-left font-bold">
        {{COMPANY_NAME}}
      </td>
      <td colspan="2" rowspan="2" class="no-border-top no-border-left">
        <span class="text-muted">Invoice No.</span><br>
        <span class="font-bold">{{INVOICE_NO}}</span>
      </td>
      <td colspan="4" rowspan="2" class="no-border-top no-border-left">
        <span class="text-muted">Dated</span><br>
        <span class="font-bold">{{DATED}}</span>
      </td>
    </tr>
    <tr>
      <td colspan="2" rowspan="3" class="no-border-left">
        {{COMPANY_ADDRESS}}
      </td>
    </tr>
    <tr>
      <td colspan="2" rowspan="2" class="no-border-left">
        <span class="text-muted">Delivery Note</span><br>
        <span class="font-bold">{{DELIVERY_NOTE}}</span>
      </td>
      <td colspan="4" rowspan="2" class="no-border-left">
        <span class="text-muted">Mode/Terms of Payment</span><br>
        <span class="font-bold">{{PAYMENT_TERMS}}</span>
      </td>
    </tr>
    <tr></tr> <!-- Dummy row for rowspan -->
    <tr>
      <td colspan="2" class="no-border-left">
        VAT NO: <span class="font-bold">{{VAT_NO}}</span>
      </td>
      <td colspan="2" rowspan="2" class="no-border-left">
        <span class="text-muted">Reference No. & Date.</span><br>
        <span class="font-bold">{{REF_NO_DATE}}</span>
      </td>
      <td colspan="4" rowspan="2" class="no-border-left">
        <span class="text-muted">Other References</span><br>
        <span class="font-bold">{{OTHER_REF}}</span>
      </td>
    </tr>
    <tr>
      <td class="no-border-left">State: <span class="font-bold">{{STATE}}</span></td>
      <td class="no-border-left">Pin: <span class="font-bold">{{PIN_CODE}}</span></td>
    </tr>
    <tr>
      <td colspan="2" class="no-border-left">
        Contact: <span class="font-bold">{{CONTACT}}</span>
      </td>
      <td colspan="2" rowspan="2" class="no-border-left">
        <span class="text-muted">Buyer's Order No.</span><br>
        <span class="font-bold">{{BUYERS_ORDER_NO}}</span>
      </td>
      <td colspan="4" rowspan="2" class="no-border-left">
        <span class="text-muted">Dated</span><br>
        <span class="font-bold">{{BUYERS_ORDER_DATED}}</span>
      </td>
    </tr>
    <tr>
      <td colspan="2" class="no-border-left">
        e-Mail: <span class="font-bold">{{EMAIL}}</span>
      </td>
    </tr>

    <!-- Consignee & Dispatch Info -->
    <tr>
      <td colspan="4" class="section-title no-border-top">Consignee (Ship to)</td>
      <td colspan="2" rowspan="2" class="no-border-top no-border-left">
        <span class="text-muted">Dispatch Doc No.</span><br>
        <span class="font-bold">{{DISPATCH_DOC_NO}}</span>
      </td>
      <td colspan="4" rowspan="2" class="no-border-top no-border-left">
        <span class="text-muted">Delivery Note Date</span><br>
        <span class="font-bold">{{DELIVERY_NOTE_DATE}}</span>
      </td>
    </tr>
    <tr>
      <td colspan="4" class="no-border-left font-bold">{{CONSIGNEE_NAME}}</td>
    </tr>
    <tr>
      <td colspan="4" rowspan="2" class="no-border-left">
        {{CONSIGNEE_ADDRESS}}
      </td>
      <td colspan="2" rowspan="2" class="no-border-left">
        <span class="text-muted">Dispatched through</span><br>
        <span class="font-bold">{{DISPATCHED_THROUGH}}</span>
      </td>
      <td colspan="4" rowspan="2" class="no-border-left">
        <span class="text-muted">Destination</span><br>
        <span class="font-bold">{{DESTINATION}}</span>
      </td>
    </tr>
    <tr></tr>
    <tr>
      <td colspan="4" class="no-border-left">GSTIN/UIN: <span class="font-bold">{{CONSIGNEE_GSTIN}}</span></td>
      <td colspan="2" rowspan="2" class="no-border-left">
        <span class="text-muted">Motor Vehicle No.</span><br>
        <span class="font-bold">{{MOTOR_VEHICLE_NO}}</span>
      </td>
      <td colspan="4" rowspan="2" class="no-border-left"></td>
    </tr>
    <tr>
      <td colspan="4" class="no-border-left">
        State: <span class="font-bold">{{CONSIGNEE_STATE}}</span> &nbsp;&nbsp; Pin: <span class="font-bold">{{CONSIGNEE_PIN}}</span>
      </td>
    </tr>

    <!-- Buyer & Terms of Delivery -->
    <tr>
      <td colspan="2" class="no-border-left">State: <span class="font-bold">{{STATE}}</span></td>
      <td colspan="2" class="no-border-left">Pin code: <span class="font-bold">{{PIN_CODE}}</span></td>
      <td colspan="6" rowspan="8" class="no-border-left">
        <span class="text-muted">Terms of Delivery</span><br>
        <span class="font-bold">{{TERMS_OF_DELIVERY}}</span>
      </td>
    </tr>
    <tr>
      <td colspan="4" class="section-title no-border-left">Buyer (Bill to)</td>
    </tr>
    <tr>
      <td colspan="4" class="no-border-left font-bold">{{BUYER_NAME}}</td>
    </tr>
    <tr>
      <td colspan="4" rowspan="3" class="no-border-left">
        {{BUYER_ADDRESS}}
      </td>
    </tr>
    <tr></tr>
    <tr></tr>
    <tr>
      <td colspan="4" class="no-border-left">GSTIN/UIN: <span class="font-bold">{{BUYER_GSTIN}}</span></td>
    </tr>
    <tr>
      <td colspan="2" class="no-border-left">State: <span class="font-bold">{{BUYER_STATE}}</span></td>
      <td colspan="2" class="no-border-left">Pin code: <span class="font-bold">{{BUYER_PIN}}</span></td>
    </tr>

    <!-- Items table header -->
    <tr class="section-title text-center">
      <td style="width: 50px;">Sl. No.</td>
      <td colspan="4">Description of Goods</td>
      <td style="width: 70px;">SKU</td>
      <td style="width: 80px;">Quantity</td>
      <td style="width: 70px;">Rate</td>
      <td style="width: 60px;">per</td>
      <td style="width: 90px;">Amount</td>
    </tr>

    <!-- Dynamic item rows injected here -->
    {{ITEMS_ROWS}}

    <!-- Tax Rows -->
    {{TAX_ROWS}}

    <!-- Total row -->
    <tr class="font-bold">
      <td class="no-border-top no-border-bottom"></td>
      <td colspan="4" class="text-right">Total</td>
      <td class="no-border-left no-border-right"></td>
      <td class="text-right">{{SUBTOTAL_QTY}}</td>
      <td colspan="2" class="no-border-left no-border-right"></td>
      <td class="text-right" style="font-size: 10pt;">{{GRAND_TOTAL}}</td>
    </tr>

    <!-- Amount in words -->
    <tr>
      <td colspan="5" class="no-border-left no-border-right no-border-bottom">
        <span class="font-bold">Amount Chargeable (in words)</span>
      </td>
      <td colspan="5" class="text-right no-border-left no-border-right no-border-bottom font-italic">
        {{AMOUNT_IN_WORDS}}
      </td>
    </tr>

    <!-- Tax amount + Bank Details + Declaration & Signatures -->
    <tr>
      <td colspan="10" class="no-border-left no-border-right no-border-bottom">
        <span class="font-bold">Tax Amount (in words):</span> <span class="font-italic">{{TAX_AMOUNT_WORDS}}</span>
      </td>
    </tr>
    <tr>
      <td colspan="5" class="no-border-left no-border-bottom">
        <span class="font-bold">Declaration</span><br>
        We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.
      </td>
      <td colspan="5" class="no-border-right no-border-bottom">
        <span class="font-bold">Company's Bank Details</span><br>
        Bank Name : {{BANK_NAME}}<br>
        A/c No. : {{BANK_ACC}}<br>
        Branch & IFS Code : {{BANK_IFSC}}
      </td>
    </tr>

    <!-- Signatures -->
    <tr class="footer-row">
      <td colspan="5" class="text-center font-bold" style="vertical-align: bottom;">
        <span style="font-size: 14pt;">{{AUTH_SIGNATORY}}</span><br>
        Authorised Signatory
      </td>
      <td colspan="5" class="text-center font-bold no-border-left" style="vertical-align: bottom;">
        {{SEAL_CELL}}<br>
        Customer's Seal and Signature
      </td>
    </tr>
  </table>
  </div>
</div>
</body>
</html>`;
