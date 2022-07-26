const { Router } = require('express');

const iecho = require('./iecho.js');

const router = Router();

router.use('/iecho', iecho);


module.exports = router;