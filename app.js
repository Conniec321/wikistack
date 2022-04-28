const express = require('express');
const app = express();

app.use(express.static("stylesheets"));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  let html = `<!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="news-list">
      <p>Hello World</p>
    </div>
  </body>
  </html>`
  res.send(html)
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log('Listening to PORT ', PORT)
})
