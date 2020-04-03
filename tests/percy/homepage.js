const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:3000/');
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor(".App_title");
  await percySnapshot('homepage', { widths: [350, 992, 1200] });
});