const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Successfully Connected to server');

    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lauch'}).then((todo) => {
    //     console.log(todo);
    //     // console.log(JSON.stringify(todo, undefined, 2));
    // }).catch((err) => {
    //     console.log('Unable to delete todos', err)
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log('Unable to delete todo', err)
    // });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log('Unable to delete todo', err)
    });


    // client.close();
});