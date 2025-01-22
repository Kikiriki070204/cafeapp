const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});
app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/public/products.html');
});
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
