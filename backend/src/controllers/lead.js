const Lead = require('../models/Lead');

async function createLead(req, res) {
  const lead = await Lead.create({ name: req.body.name, status: req.body.status });
  res.json(lead);
}

async function getLeads(req, res) {
  const leads = await Lead.findAll();
  res.json(leads);
}

module.exports = { createLead, getLeads };
