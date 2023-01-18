require('dotenv').config();
import express from 'express';
import './db-config';
import Music from './models/music';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;
app.use(express.json());
app.use(bodyParser.json());

app.get('/music', (req, res) => {
  Music.find((err, music) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(music);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
