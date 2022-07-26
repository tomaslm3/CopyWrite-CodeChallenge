const { Router } = require('express');
const { reverseText } = require('../controllers/iechoControllers/getControllers');
const router = Router();

router.get('/', async function(req, res) {
    const { text } = req.query;
    try{
        if(typeof text === 'string' && text.length > 0){
        const result = await reverseText(text);
            if(result.isPalindrome === true){
                res.status(200).json({
                    text: result.text,
                    palindrome: true
                });
            } else {
                res.status(200).json({
                    text: result.text  
                });
            }
        } else {
        res.status(400).json({
            error: 'no text'
        });
    }
    }
    catch(err){
        console.log(err);
    }
});

module.exports = router;