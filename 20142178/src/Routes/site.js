const express = require('express');
const router = express.Router();
const siteController = require('../Controllers/siteController');

router.get('/20142178/:id', siteController.loadUserById);
router.post('/20142178/:id', siteController.addUserById);
router.get('/message/:id', siteController.messageController);
router.get('/message', siteController.messageController);
router.get('/', siteController.index);

module.exports = router;
