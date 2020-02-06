const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://192.168.80.3:3000/');
  // ensure the page has loaded before capturing a snapshot
  await percySnapshot('homepage');
});