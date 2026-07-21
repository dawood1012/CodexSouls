const https = require('https');

https.get('https://fueled.com', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Find CSS file links
    const cssLinks = data.match(/href="([^"]+\.css[^"]*)"/g);
    if (cssLinks) {
      console.log('Found CSS links:', cssLinks);
      const url = cssLinks[0].match(/href="([^"]+)"/)[1];
      console.log('Fetching CSS:', url);
      https.get(url, (res2) => {
        let cssData = '';
        res2.on('data', (chunk) => { cssData += chunk; });
        res2.on('end', () => {
          const fonts = cssData.match(/font-family:[^;}]+/g);
          if (fonts) {
            console.log('Found fonts:', [...new Set(fonts)]);
          } else {
            console.log('No fonts found in CSS');
          }
        });
      });
    } else {
      console.log('No CSS links found');
    }
  });
});
