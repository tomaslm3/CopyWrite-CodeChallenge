const { Router } = require('express');

// import all the routes
const iecho = require('./iecho.js');

const router = Router();

// add the routes to the router
router.use('/iecho', iecho);


module.exports = router;