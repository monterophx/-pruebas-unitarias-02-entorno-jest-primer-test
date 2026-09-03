const request = require('supertest');
const app = require('./app');

describe('GET /tareas', () => {
  it('responde con status 200', async () => {
    const respuesta = await request(app).get('/tareas');
    expect(respuesta.statusCode).toBe(200);
  });

  it('responde con un arreglo de tareas en formato JSON', async () => {
    const respuesta = await request(app).get('/tareas');
    expect(respuesta.headers['content-type']).toMatch(/json/);
    expect(Array.isArray(respuesta.body)).toBe(true);
    expect(respuesta.body.length).toBeGreaterThan(0);
  });

  it('cada tarea tiene id, titulo y completada', async () => {
    const respuesta = await request(app).get('/tareas');
    respuesta.body.forEach((tarea) => {
      expect(tarea).toHaveProperty('id');
      expect(tarea).toHaveProperty('titulo');
      expect(tarea).toHaveProperty('completada');
    });
  });
});
