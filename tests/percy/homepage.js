const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:3001/');
  // ensure the page has loaded before capturing a snapshot
  await percySnapshot('homepage');
});