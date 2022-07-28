const { Router } = require('express');
const { reverseText } = require('../controllers/iechoControllers/getControllers');
const router = Router();

router.get('/', async function(req, res) {
    const { text } = req.query;
    try{
        // get the result of the reverseText function and send it to the client
        if(typeof text === 'string' && text.length > 0){
        const result = await reverseText(text);
        // add palindrome flag to the result
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
            // if the text is not a string or is empty, send an error message
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