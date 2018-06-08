const { MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Successfully Connected to server');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b1a7f48658cdc61359b0ebf")
    // },{
    //     $set:{
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log('Unable to update todo', err)
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b193b0418a781389421313c')
    }, {
        $set:{
            name:'vanske'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log('Unable to update todo', err)
    });


    // client.close();
});