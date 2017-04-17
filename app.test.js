const request = require('supertest')
const app = require('./app')

test('response hello world', () => request(app).get('/').expect(200, 'Hello World!'))
