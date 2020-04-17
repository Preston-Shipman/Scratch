require('dotenv/config');
const express = require('express');
const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');
const fetch = require('node-fetch');
const bcrypt = require('bcrypt');
const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);
app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/notes', (req, res, next) => {
  const allNotes = `select * from "notes"`
  db.query(allNotes) {
    .then(response => {
      const notesResponse = response.rows;
      if(!notesResponse) {
        next(new ClientError(`No notes found!${req.method} ${req.originalUrl}`, 404));
      }
      else {
        res.json(notesResponse);
      }
    })
    .catch(err => { next(err); });
  }
})
