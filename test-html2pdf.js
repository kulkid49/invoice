import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/');

  await page.waitForSelector('.btn-success');
  
  // click download
  const downloadPath = '/workspace/downloads2';
  if (!fs.existsSync(downloadPath)) fs.mkdirSync(downloadPath);

  const client = await page.target().createCDPSession();
  await client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: downloadPath,
  });

  await page.evaluate(() => {
    const btns = document.querySelectorAll('.btn-success');
    for (const btn of btns) {
      if (btn.textContent.includes('Download PDF')) {
        btn.click();
      }
    }
  });

  await new Promise(r => setTimeout(r, 5000));
  
  const files = fs.readdirSync(downloadPath);
  console.log('Downloaded files:', files);
  
  await browser.close();
})();
