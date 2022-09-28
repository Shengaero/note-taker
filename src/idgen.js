// allowed characters in idgenerator
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function idgen(length = 10) {
    // start with empty result string
    let result = '';
    // for the amount of characters requested
    for(let i = 0; i < length; i++) {
        // append a random character
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    // return result
    return result;
}

module.exports = idgen;
