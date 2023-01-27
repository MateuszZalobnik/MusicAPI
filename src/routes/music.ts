import express, { Request, Response } from 'express';
import { createMusic, getMusic } from '../controllers/music';

const router = express.Router();

router.get('/', getMusic);

router.post('/', createMusic);


export default router;
