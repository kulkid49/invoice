// invoiceTemplate.js
// The original Invoice.html content with static placeholders replaced by {{TOKEN}} tokens.
// DO NOT alter the table structure, colspan/rowspan, or inline styles.

export const INVOICE_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<style>
@font-face { font-family:"Cambria Math"; panose-1:2 4 5 3 5 4 6 3 2 4; }
@font-face { font-family:Calibri; panose-1:2 15 5 2 2 2 4 3 2 4; }
@font-face { font-family:Aptos; panose-1:2 11 0 4 2 2 2 2 2 4; }
p.MsoNormal, li.MsoNormal, div.MsoNormal {
  margin-top:0in; margin-right:0in; margin-bottom:8.0pt;
  margin-left:0in; line-height:107%; font-size:11.0pt; font-family:"Aptos",sans-serif;
}
.MsoChpDefault { font-size:12.0pt; font-family:"Aptos",sans-serif; }
.MsoPapDefault { margin-bottom:8.0pt; line-height:115%; }
@page WordSection1 { size:595.3pt 841.9pt; margin:1.0in 1.0in 1.0in 21.3pt; }
div.WordSection1 { page:WordSection1; }
body { font-family: Arial, sans-serif; }
@media print {
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
</style>
</head>
<body lang=EN-US style='word-wrap:break-word'>
<div class=WordSection1>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=754
 style='width:7.85in;border-collapse:collapse'>
 <tr style='height:20.35pt'>
  <td width=739 nowrap colspan=10 style='width:554.1pt;border:solid windowtext 1.0pt;
  background:#7F7F7F;padding:0in 5.4pt 0in 5.4pt;height:20.35pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><b><span lang=EN-IN style='font-size:16.0pt;font-family:
  "Arial",sans-serif;color:white'>Invoice</span></b></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=15><p class='MsoNormal'>&nbsp;</td>
  <td style='height:20.35pt;border:none' width=0 height=27></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=132 nowrap colspan=2 rowspan=8 style='width:99.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  {{LOGO_CELL}}
  </td>
  <td width=189 nowrap colspan=2 valign=top style='width:142.05pt;border-top:
  none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>{{COMPANY_NAME}}</span></p>
  </td>
  <td width=168 nowrap colspan=2 rowspan=2 valign=top style='width:125.8pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Invoice No.<br><b>{{INVOICE_NO}}</b></span></p>
  </td>
  <td width=250 nowrap colspan=4 rowspan=2 valign=top style='width:187.25pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Dated<br><b>{{DATED}}</b></span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=15><p class='MsoNormal'>&nbsp;</td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:23.55pt'>
  <td width=189 nowrap colspan=2 rowspan=3 valign=top style='width:142.05pt;
  border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;
  border-right:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:23.55pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>{{COMPANY_ADDRESS}}</span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=15><p class='MsoNormal'>&nbsp;</td>
  <td style='height:23.55pt;border:none' width=0 height=31></td>
 </tr>
 <tr style='height:23.55pt'>
  <td width=168 nowrap colspan=2 rowspan=2 valign=top style='width:125.8pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:23.55pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Delivery Note<br><b>{{DELIVERY_NOTE}}</b></span></p>
  </td>
  <td width=250 nowrap colspan=4 rowspan=2 valign=top style='width:187.25pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:23.55pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Mode/Terms of Payment<br><b>{{PAYMENT_TERMS}}</b></span></p>
  </td>
  <td style='border:none;padding:0in 0in 0in 0in' width=15><p class='MsoNormal'>&nbsp;</td>
  <td style='height:23.55pt;border:none' width=0 height=31></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=15 nowrap valign=bottom style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;
  height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=189 nowrap colspan=2 valign=top style='width:142.05pt;border-top:
  none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>VAT NO: <b>{{VAT_NO}}</b></span></p>
  </td>
  <td width=168 nowrap colspan=2 rowspan=2 valign=top style='width:125.8pt;
  border:none;border-right:solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Reference No. &amp; Date.<br><b>{{REF_NO_DATE}}</b></span></p>
  </td>
  <td width=250 nowrap colspan=4 rowspan=2 valign=top style='width:187.25pt;
  border:none;border-right:solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Other References<br><b>{{OTHER_REF}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=94 nowrap valign=top style='width:70.3pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>State: <b>{{STATE}}</b></span></p>
  </td>
  <td width=96 nowrap valign=top style='width:71.75pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>Pin: <b>{{PIN_CODE}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=189 nowrap colspan=2 valign=top style='width:142.05pt;border-top:
  none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>Contact: <b>{{CONTACT}}</b></span></p>
  </td>
  <td width=168 nowrap colspan=2 rowspan=2 valign=top style='width:125.8pt;
  border-top:solid windowtext 1.0pt;border-left:none;border-bottom:solid black 1.0pt;
  border-right:solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Buyer's Order No.<br><b>{{BUYERS_ORDER_NO}}</b></span></p>
  </td>
  <td width=250 nowrap colspan=4 rowspan=2 valign=top style='width:187.25pt;
  border-top:solid windowtext 1.0pt;border-left:none;border-bottom:solid black 1.0pt;
  border-right:solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Dated<br><b>{{BUYERS_ORDER_DATED}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=189 nowrap colspan=2 valign=top style='width:142.05pt;border-top:
  none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>e-Mail: <b>{{EMAIL}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>

 <!-- Consignee & right columns -->
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;background:#FFF2CC;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><u><span
  lang=EN-IN style='font-family:"Arial",sans-serif;color:black'>Consignee (Ship to)</span></u></b></p>
  </td>
  <td width=168 nowrap colspan=2 rowspan=2 valign=top style='width:125.8pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Dispatch Doc No.<br><b>{{DISPATCH_DOC_NO}}</b></span></p>
  </td>
  <td width=250 nowrap colspan=4 rowspan=2 valign=top style='width:187.25pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Delivery Note Date<br><b>{{DELIVERY_NOTE_DATE}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'><b>{{CONSIGNEE_NAME}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>{{CONSIGNEE_ADDRESS}}</span></p>
  </td>
  <td width=168 nowrap colspan=2 rowspan=2 valign=top style='width:125.8pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Dispatched through<br><b>{{DISPATCHED_THROUGH}}</b></span></p>
  </td>
  <td width=250 nowrap colspan=4 rowspan=2 valign=top style='width:187.25pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Destination<br><b>{{DESTINATION}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>GSTIN/UIN: <b>{{CONSIGNEE_GSTIN}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>

 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>Bill of Lading/LR-RR No.: <b>{{BILL_OF_LADING}}</b></span></p>
  </td>
  <td width=168 nowrap colspan=2 rowspan=2 valign=top style='width:125.8pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Motor Vehicle No.<br><b>{{MOTOR_VEHICLE_NO}}</b></span></p>
  </td>
  <td width=250 nowrap colspan=4 rowspan=2 valign=top style='width:187.25pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>State: <b>{{CONSIGNEE_STATE}}</b> &nbsp;&nbsp; Pin: <b>{{CONSIGNEE_PIN}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>

 <!-- Buyer section with Terms of Delivery spanning right -->
 <tr style='height:14.75pt'>
  <td width=132 nowrap colspan=2 valign=top style='width:99.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>State: <b>{{STATE}}</b></span></p>
  </td>
  <td width=189 nowrap colspan=2 valign=top style='width:142.05pt;border-top:
  none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>Pin code: <b>{{PIN_CODE}}</b></span></p>
  </td>
  <td width=417 nowrap colspan=6 rowspan=8 valign=top style='width:313.05pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Terms of Delivery<br><b>{{TERMS_OF_DELIVERY}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;background:#FFF2CC;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><u><span
  lang=EN-IN style='font-family:"Arial",sans-serif;color:black'>Buyer (Bill to)</span></u></b></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'><b>{{BUYER_NAME}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>{{BUYER_ADDRESS}}</span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>&nbsp;</span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>&nbsp;</span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>GSTIN/UIN: <b>{{BUYER_GSTIN}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=132 nowrap colspan=2 valign=top style='width:99.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>State: <b>{{BUYER_STATE}}</b></span></p>
  </td>
  <td width=189 nowrap colspan=2 valign=top style='width:142.05pt;border-top:
  none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>Pin code: <b>{{BUYER_PIN}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>

 <!-- Items table header -->
 <tr style='height:14.75pt'>
  <td width=104 nowrap rowspan=2 style='width:77.65pt;border-top:none;
  border-left:solid windowtext 1.0pt;border-bottom:solid black 1.0pt;
  border-right:solid windowtext 1.0pt;background:#FFF2CC;padding:0in 5.4pt 0in 5.4pt;
  height:14.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><b><u><span lang=EN-IN style='font-family:"Arial",sans-serif;
  color:black'>Sl. No.</span></u></b></p>
  </td>
  <td width=325 nowrap colspan=4 rowspan=2 style='width:243.8pt;border-top:
  none;border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  background:#FFF2CC;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><b><u><span lang=EN-IN style='font-family:"Arial",sans-serif;
  color:black'>Description of Goods</span></u></b></p>
  </td>
  <td width=61 nowrap rowspan=2 style='width:45.4pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FFF2CC;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><b><u><span lang=EN-IN style='font-family:"Arial",sans-serif;
  color:black'>SKU</span></u></b></p>
  </td>
  <td width=74 nowrap rowspan=2 style='width:55.45pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FFF2CC;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><b><u><span lang=EN-IN style='font-family:"Arial",sans-serif;
  color:black'>Quantity</span></u></b></p>
  </td>
  <td width=46 nowrap rowspan=2 style='width:34.65pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FFF2CC;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><b><u><span lang=EN-IN style='font-family:"Arial",sans-serif;
  color:black'>Rate</span></u></b></p>
  </td>
  <td width=51 nowrap rowspan=2 style='width:38.15pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FFF2CC;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><b><u><span lang=EN-IN style='font-family:"Arial",sans-serif;
  color:black'>per</span></u></b></p>
  </td>
  <td width=79 nowrap rowspan=2 style='width:59.0pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  background:#FFF2CC;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><b><u><span lang=EN-IN style='font-family:"Arial",sans-serif;
  color:black'>Amount</span></u></b></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=15 nowrap valign=bottom style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;
  height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>

 <!-- Dynamic item rows injected here -->
 {{ITEMS_ROWS}}

 <!-- VAT row -->
 <tr style='height:14.75pt'>
  <td width=104 nowrap valign=top style='width:77.65pt;border-top:none;
  border-left:solid windowtext 1.0pt;border-bottom:none;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>&nbsp;</span></p>
  </td>
  <td width=325 colspan=4 valign=top style='width:243.8pt;border:none;
  border-right:solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;
  line-height:normal'><b><i><span lang=EN-IN style='font-size:10.0pt;
  font-family:"Arial",sans-serif;color:black'>VAT</span></i></b></p>
  </td>
  <td width=61 nowrap valign=top style='width:45.4pt;border:none;border-right:
  solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>&nbsp;</span></p>
  </td>
  <td width=74 nowrap valign=top style='width:55.45pt;border:none;border-right:
  solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;
  line-height:normal'><b><span lang=EN-IN style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black'>&nbsp;</span></b></p>
  </td>
  <td width=46 nowrap valign=top style='width:34.65pt;border:none;border-right:
  solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;
  line-height:normal'><span lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;
  color:black'>{{VAT_PERCENT}}%</span></p>
  </td>
  <td width=51 nowrap valign=top style='width:38.15pt;border:none;border-right:
  solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;
  line-height:normal'><span lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;
  color:black'>&nbsp;</span></p>
  </td>
  <td width=79 nowrap valign=top style='width:59.0pt;border:none;border-right:
  solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;
  line-height:normal'><span lang=EN-IN style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black'><b>{{VAT_AMOUNT}}</b></span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>

 <!-- Total row -->
 <tr style='height:15.8pt'>
  <td width=104 nowrap valign=top style='width:77.65pt;border:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.8pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>&nbsp;</span></p>
  </td>
  <td width=325 nowrap colspan=4 valign=top style='width:243.8pt;border-top:
  solid windowtext 1.0pt;border-left:none;border-bottom:solid windowtext 1.0pt;
  border-right:none;padding:0in 5.4pt 0in 5.4pt;height:15.8pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;
  line-height:normal'><b><span lang=EN-IN style='font-size:9.0pt;font-family:
  "Arial",sans-serif;color:black'>Total</span></b></p>
  </td>
  <td width=61 nowrap valign=top style='width:45.4pt;border:solid windowtext 1.0pt;
  border-right:none;padding:0in 5.4pt 0in 5.4pt;height:15.8pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;
  color:black'>&nbsp;</span></p>
  </td>
  <td width=74 nowrap valign=top style='width:55.45pt;border:solid windowtext 1.0pt;
  border-right:none;padding:0in 5.4pt 0in 5.4pt;height:15.8pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;
  line-height:normal'><b><span lang=EN-IN style='font-size:10.0pt;font-family:
  "Arial",sans-serif;color:black'>{{SUBTOTAL_QTY}}</span></b></p>
  </td>
  <td width=46 nowrap valign=top style='width:34.65pt;border:solid windowtext 1.0pt;
  border-right:none;padding:0in 5.4pt 0in 5.4pt;height:15.8pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;
  line-height:normal'><b><span lang=EN-IN style='font-size:9.0pt;font-family:
  "Arial",sans-serif;color:black'>&nbsp;</span></b></p>
  </td>
  <td width=51 nowrap valign=top style='width:38.15pt;border:solid windowtext 1.0pt;
  border-right:none;padding:0in 5.4pt 0in 5.4pt;height:15.8pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>&nbsp;</span></b></p>
  </td>
  <td width=79 nowrap valign=top style='width:59.0pt;border:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.8pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;
  line-height:normal'><b><span lang=EN-IN style='font-size:12.0pt;font-family:
  "Arial",serif;color:black'>{{GRAND_TOTAL}}</span></b></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:15.8pt'></td>
  <td style='height:15.8pt;border:none' width=0 height=21></td>
 </tr>

 <!-- Amount in words -->
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border:none;
  border-left:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Amount Chargeable (in words)</span></b></p>
  </td>
  <td width=417 nowrap colspan=6 valign=top style='width:313.05pt;border:none;
  border-right:solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=right style='margin-bottom:0in;text-align:right;
  line-height:normal'><i><span lang=EN-IN style='font-size:9.0pt;font-family:
  "Arial",sans-serif;color:black'>{{AMOUNT_IN_WORDS}}</span></i></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>

 <!-- Tax amount + Authorised signatory -->
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border-top:
  solid windowtext 1.0pt;border-left:solid windowtext 1.0pt;border-bottom:none;
  border-right:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Tax Amount (in words): <i>{{TAX_AMOUNT_WORDS}}</i></span></p>
  </td>
  <td width=417 colspan=6 rowspan=3 valign=top style='width:313.05pt;
  border-top:windowtext;border-left:windowtext;border-bottom:black;border-right:
  black;border-style:solid;border-width:1.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:14.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'>{{SEAL_CELL}}</p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 valign=top style='width:241.05pt;border-top:
  none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
  border-right:none;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>Declaration</span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:40.25pt'>
  <td width=321 colspan=4 valign=top style='width:241.05pt;border:none;
  border-left:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:40.25pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  lang=EN-IN style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>We
  declare that this invoice shows the actual price of the goods described and
  that all particulars are true and correct.</span></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:40.25pt'></td>
  <td style='height:40.25pt;border:none' width=0 height=54></td>
 </tr>

 <!-- Signature row -->
 <tr style='height:14.75pt'>
  <td width=321 nowrap colspan=4 rowspan=3 valign=bottom style='width:241.05pt;
  border-top:windowtext;border-left:windowtext;border-bottom:black;border-right:
  black;border-style:solid;border-width:1.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:14.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><b><span lang=EN-IN style='font-size:9.0pt;font-family:
  "Arial",sans-serif;color:black'>Customer's Seal and Signature</span></b></p>
  </td>
  <td width=417 nowrap colspan=6 rowspan=3 valign=bottom style='width:313.05pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><b><span lang=EN-IN style='font-size:9.0pt;font-family:
  "Arial",sans-serif;color:black'>Authorised Signatory</span></b></p>
  </td>
  <td width=15 style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=15 nowrap valign=bottom style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;
  height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:14.75pt'>
  <td width=15 nowrap valign=bottom style='width:11.1pt;padding:0in 5.4pt 0in 5.4pt;
  height:14.75pt'></td>
  <td style='height:14.75pt;border:none' width=0 height=20></td>
 </tr>

 <tr height=0>
  <td width=104 style='border:none'></td>
  <td width=28 style='border:none'></td>
  <td width=94 style='border:none'></td>
  <td width=96 style='border:none'></td>
  <td width=107 style='border:none'></td>
  <td width=61 style='border:none'></td>
  <td width=74 style='border:none'></td>
  <td width=46 style='border:none'></td>
  <td width=51 style='border:none'></td>
  <td width=79 style='border:none'></td>
  <td width=15 style='border:none'></td>
  <td style='border:none' width=0><p class='MsoNormal'>&nbsp;</td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-IN>&nbsp;</span></p>
</div>
</body>
</html>`;
