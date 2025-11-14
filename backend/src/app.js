const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);

sequelize.sync().then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
});

module.exports = app;
