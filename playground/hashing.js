const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs')

const password = 'singco143';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash)
    });
});

const hashedPassword = '$2a$10$vvM9uNBHg9pWBUl5vTVZnOKJQLMRua2nOuxcTExS.O.MAmea8Mr7e'

bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log(result);
})
// const message = "I am user number 1";
// const hash = SHA256(message).toString();

// console.log(hash)

// const data = {
//     id: 10
// }

// const token = jwt.sign(data, 'singco');
// const decoded = jwt.verify(token, 'singco')

// console.log(`Token: ${token}`)
// console.log('Decoded', decoded)