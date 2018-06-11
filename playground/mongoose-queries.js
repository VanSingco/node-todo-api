const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// const id = "5b1d394f6e796f0b905b9214";

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id:id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// }).catch((err) => {
//     console.log('Unable to fetch todo', err);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// }).catch((err) => {
//     console.log('Unable to fetch todo', err);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Todo ID not found')
//     }
//     console.log('Todo By ID: ', todo);
// }).catch((err) => {
//     console.log('Unable to fetch todo', err);
// });

const userId = "5b1b3df5354a8020849a5b67";

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found')
    }
    console.log('User found: ', user)
}).catch((err) => {
    console.log('Unable to fetch user ', err) 
});


