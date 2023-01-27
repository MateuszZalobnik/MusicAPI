import express, { Request, Response } from 'express';
import { createArtist, getArtist } from '../controllers/artist';

const router = express.Router();

router.get('/', getArtist);

router.post('/', createArtist);


export default router;
