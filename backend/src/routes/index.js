const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const lead = require('../controllers/lead');
const { authenticateToken } = require('../middlewares/auth');

router.post('/auth/register', auth.register);
router.post('/auth/login', auth.login);

router.post('/leads', authenticateToken, lead.createLead);
router.get('/leads', authenticateToken, lead.getLeads);

module.exports = router;
