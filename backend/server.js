const app = require('./app');

const PORT = process.env.PORT || '6987';

app.listen(PORT, () => {
  console.log(`\nListening on port ${PORT}\n`);
});