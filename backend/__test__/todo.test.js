const request = require('supertest');
const app = require('../app');

describe('Todo API', () => {
    test('GET /todos should return status 200', async () => {
        const response = await request(app).get('/todos');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('POST /todos should reject empty task', async () => {
        const response = await request(app)
            .post('/todos')
            .send({
                task: ''
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('Task cannot be empty');
    });

    test('POST /todos should add a task', async () => {
        const response = await request(app)
            .post('/todos')
            .send({
                task: 'Learn Jest'
            });

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});