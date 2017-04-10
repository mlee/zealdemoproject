const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const minimumWeightPath = require('./js/minimum_weight_path');

app.post('/', (req, res) => {
  const result = minimumWeightPath(req.body);
  res.json(result);
});

app.listen(3000, () => {
  console.log('server started, listening on port 3000');
});
