const express = require('express');

const app = express();

app.use(express.json());

const tareas = [
  { id: 1, titulo: 'Aprender Jest', completada: false },
  { id: 2, titulo: 'Escribir el primer test unitario', completada: false },
  { id: 3, titulo: 'Subir los cambios a GitHub', completada: false },
];

app.get('/tareas', (req, res) => {
  res.status(200).json(tareas);
});

module.exports = app;
