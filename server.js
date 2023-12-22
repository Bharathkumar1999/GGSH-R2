const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors());  
app.use(bodyParser.json());

// API 1 - GET method
app.get('/api/combine', (req, res) => {
  const str1 = req.query.str1 || '';
  const str2 = req.query.str2 || '';
  const combinedString = str1 + ' ' + str2;
  res.send(combinedString);
});

// API 2 - POST method
app.post('/api/add', (req, res) => {
  const { num1, num2, num3 } = req.body;
  const sum = num1 + num2 + num3;
  res.json({ result: sum });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



