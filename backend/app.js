const express = require('express');
require("dotenv").config();
const app = express();

// Add Routers
const catcherRouter = require('./routers/catcherRouter');

const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || '6987';

app.use('/api/catchers', catcherRouter);


app.get('/', (req, res) => {
  res.status(200).send(`API active on port: ${PORT}`);
});

module.exports = app;
