const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')


// Todo.remove({}).then((result) => {
//     console.log(result)   
// }).catch((err) => {
//     console.log(err)
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5b1e70a1454e9c0b1066cc40').then((todo) => {
    console.log(todo);
}).catch((err) => {
    console.log(err);
});