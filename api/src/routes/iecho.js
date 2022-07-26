const { Router } = require('express');
const router = Router();

router.get('/', async function(req, res) {
    res.send('IECHO!');
});

module.exports = router;