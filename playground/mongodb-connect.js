const {MongoClient, ObjectID} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Succesfully Connected to MongoDB server')

    const db = client.db('TodoApp')
    // db.collection('Todos').insertOne({
    //     text: 'learning nodeJS',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection('Users').insertOne({
        name: 'Van Zachary',
        age: 19,
        location: 'Ambago butuan city'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert to users', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });
    
    client.close();
});