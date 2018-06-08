const {MongoClient, ObjectId} = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, client) => {

    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp')
    
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }).catch((err) => {
        console.log('Unable to fetch todos', err)
    });

    db.collection('Users').find({name: "Van Zachary"}).toArray().then((user) =>{
        console.log('Users');
        console.log(JSON.stringify(user, undefined, 2));
    }).catch((err) => {
        console.log('Unable to fetch user', err);
    });

    // client.close();
});