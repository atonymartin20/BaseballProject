const express = require('express');
require("dotenv").config();
const app = express();

// Add Routers
const catcherRouter = require('./routers/catcherRouter');
const firstBaseRouter = require('./routers/firstBaseRouter');
const secondBaseRouter = require('./routers/secondBaseRouter');
const shortStopRouter = require('./routers/shortStopRouter');
const thirdBaseRouter = require('./routers/thirdBaseRouter');
const outfieldRouter = require('./routers/outfieldRouter');
const startingPitcherRouter = require('./routers/startingPitcherRouter');
const reliefPitcherRouter = require('./routers/reliefPitcherRouter');
const designatedHitterRouter = require('./routers/designatedHitterRouter');

const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || '6987';

app.use('/api/catchers', catcherRouter);
app.use('/api/firstBase', firstBaseRouter);
app.use('/api/secondBase', secondBaseRouter);
app.use('/api/shortStop', shortStopRouter);
app.use('/api/thirdBase', thirdBaseRouter);
app.use('/api/outfield', outfieldRouter);
app.use('/api/startingPitcher', startingPitcherRouter);
app.use('/api/reliefPitcher', reliefPitcherRouter);
app.use('/api/designatedHitter', designatedHitterRouter);


app.get('/', (req, res) => {
  res.status(200).send(`API active on port: ${PORT}`);
});

module.exports = app;
