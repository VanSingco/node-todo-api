const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// const message = "I am user number 1";
// const hash = SHA256(message).toString();

// console.log(hash)

const data = {
    id: 10
}

const token = jwt.sign(data, 'singco');
const decoded = jwt.verify(token, 'singco')

console.log(`Token: ${token}`)
console.log('Decoded', decoded)