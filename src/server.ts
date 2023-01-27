require('dotenv').config();
import express from 'express';
import './db-config';
import bodyParser from 'body-parser';
import musicRouter from './routes/music';
import artistRouter from './routes/artist';

const app = express();
const port = 5000;
app.use(express.json());
app.use(bodyParser.json());

app.use('/music', musicRouter);

app.use('/artist', artistRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
