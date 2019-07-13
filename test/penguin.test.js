const request = require('supertest');
const app = require('../lib/app');

// { type: 'emperor', name: 'lucy', age: '10' }
// CRUD (create, read, update, delete)
describe('penguin routes', () => {
    it('can create a penguin with POST', () => {
        return request(app)
            .post('/api/v1/penguins')
            .send({ type: 'emperor', name: 'lucy', age: 10 })
            .then(res => {
                expect(res.body).toEqual({
                    type: 'emperor',
                    name: 'lucy',
                    age: 10
                });
            });
    });
    it('can get an array of penguins with GET', () => {
        return request(app)
            .get('/api/v1/penguins')
            .then(res => {
                expect(res.body).toEqual([{
                    type: 'emperor',
                    name: 'lucy',
                    age: 10
                }]);
            });
    });
    it('can get a penguin by its index', () => {
        return request(app)
            .get('/app/v1/penguins/0')
            .then(res => {
                expect(res.body).toEqual({
                    type: 'emperor',
                    name: 'lucy',
                    age: 10
                });
            });
    });
    it('can update a penguin by its index', () => {
        return request(app)
            .put('/app/v1/penguins/0')
            .send({
                type: 'penguin',
                name: 'bob',
                age: 5
            })
            .then(res => {
                expect(res.body).toEqual({
                    type: 'penguin',
                    name: 'bob',
                    age: 5
                });
            });
    });
});
