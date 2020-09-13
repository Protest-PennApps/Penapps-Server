require('./env');
require('./db/db');


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes');
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const http = require('http');


app.use(cors());
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: false }))
app.use("/", router);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})