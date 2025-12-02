const express = require('express');
const app = express();
const port = 3000;
console.log("New deployment test");
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

