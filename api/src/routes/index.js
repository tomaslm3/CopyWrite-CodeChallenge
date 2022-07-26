const { Router } = require('express');

const iecho = require('./iecho.js');

const router = Router();

router.get('/iecho', iecho);


module.exports = router;