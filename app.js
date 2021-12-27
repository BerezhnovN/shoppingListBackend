const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
app.use(cors());

const url = process.env.URL;
mongoose.connect(url, { useUnifiedTopology: true });

const apiRoutes = require("./src/modules/routes/routes");

app.use(bodyParser.json());
app.use("/", apiRoutes);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});