function reverse(text) {
    return text.split('').reverse().join('');
}

const reverseText = async (text) => {
    try{
        const result = await reverse(text);
        return result;
    } catch(err){
        console.log(err);
    }
    
}

module.exports = {
    reverseText
};