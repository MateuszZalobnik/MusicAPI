require('dotenv').config();
import express from 'express';
import './db-config';
import bodyParser from 'body-parser';
import musicRouter from './routes/music';
import artistRouter from './routes/artist';
import testRouter from './routes/test';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use('/music', musicRouter);

app.use('/artist', artistRouter);

app.use('/test', testRouter);

app.get('/', (req, res) => {
  res.send('home');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
