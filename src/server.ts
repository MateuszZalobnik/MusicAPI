require('dotenv').config();
import express from 'express';
import './db-config';
import bodyParser from 'body-parser';
import musicRouter from './routes/music';
import artistRouter from './routes/artist';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use('/music', musicRouter);

app.use('/artist', artistRouter);

app.get('/', (req, res) => {
  res.send('home');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
