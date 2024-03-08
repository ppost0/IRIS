const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;





// GET Request to root
app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});






// Listen on PORT in .env
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});