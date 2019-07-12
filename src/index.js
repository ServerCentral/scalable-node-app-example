let express = require('express');

let PORT = 8080;
let HOST = '0.0.0.0';

let app = express();

app.get('/', (req, res) => {
  let x = 0.0001;

  for (i = 0; i <= 1000000; i++) {
    x += Math.sqrt(x);
  }

  res.send('Done!\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
