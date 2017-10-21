const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const { port, dist } = require('../../variables/server');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('tiny'));

app.use('/', express.static(dist));

app.listen(port);

console.log(`SERVER: Listening on port ${port}`);
