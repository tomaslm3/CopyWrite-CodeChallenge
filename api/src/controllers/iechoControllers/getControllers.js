function reverse(text) {
    const reversed = text.split('').reverse().join('');
    if(reversed.toLowerCase() === text.toLowerCase()){
        return {text: reversed, isPalindrome: true};
    }
    return {text: reversed, isPalindrome: false};
}

const reverseText = async (text) => {
    try{
        const result = reverse(text);
        return result;
    } catch(err){
        console.log(err);
    }
    
}

module.exports = {
    reverseText
};