const express = require('express');
const { home, about, metrics } = require('../controllers/user.controller');
const router = express.Router();

router.get("/",home);
router.get("/about",about);
router.get("/metrics",metrics);

module.exports = router;