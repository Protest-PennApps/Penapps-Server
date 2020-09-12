require('./env');
require('./db/db');


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/index');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})