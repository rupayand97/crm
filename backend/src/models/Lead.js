const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Lead = sequelize.define('Lead', {
  name: DataTypes.STRING,
  status: DataTypes.STRING
});

module.exports = Lead;
