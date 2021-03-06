const request = require('supertest');
const expect = require('expect');
const {ObjectID} = require('mongodb')

const {app} = require('./../server')
const {Todo} = require('./../models/todo')

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
         Todo.insertMany(todos)
         done();
    });
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({
                text
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('GET / todos', () => {
    it('shoould get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2)
            })
            .end(done)
    });
});

describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    })

    it('should return 404 if todo not found', (done) => {
        request(app)
            .get(`/todos/${new ObjectID().toHexString()}`)
            .expect(404)
            .end(done)
    })

    it('should return 404 for non-object ids', (done) => {
        request(app)
            .get(`/todos/123`)
            .expect(404)
            .end(done)
    })

})

describe('DELETE /todos/:id/remove', () => {
  it('should remove todo', (done) => {
    const hexId = todos[1]._id.toHexString();

    request(app)
        .delete(`/todos/${hexId}/remove`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo._id).toBe(hexId);
        })
        .end((err, res) => {
             if (err) {
                 return done(err);
             }
             Todo.findById(hexId).then((todo) => {
                 expect(todo).toBe(null);
                 done();
             }).catch((err) => done(err));
         });
  });

  it('should return 404 if todo not found', (done) => {
    request(app)
        .delete(`/todos/${new ObjectID().toHexString()}/remove`)
        .expect(404)
        .end(done)
  })

  it('should return 404 if object ID is invalid', (done) => {
      request(app)
          .delete(`/todos/singco143/remove`)
          .expect(404)
          .end(done)
  })
})

describe('PATCH /todos/:id/edit', () => {
  it('should update todo', (done) => {
    const hexId = todos[0]._id.toHexString();
    const text = "this should be a new text";
    request(app)
        .patch(`/todos/${hexId}/edit`)
        .send({
            completed:true,
            text: text
        })
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(text)
            expect(res.body.todo.completed).toBe(true)
            expect(res.body.todo.completedAt).toBeA('number')
        })
        .end(done)
  })

  it('should clear completedAt when todo is not completed', (done) => {
    const hexId = todos[1]._id.toHexString(); 
    const text = "this should be 2";
    request(app)
        .patch(`/todos/${hexId}/edit`)
        .send({
            completed: false,
            text
        })
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(text);
            expect(res.body.todo.completed).toBe(false);
            expect(res.body.todo.completedAt).toNotExist();
        })
        .end(done)
  })
})





