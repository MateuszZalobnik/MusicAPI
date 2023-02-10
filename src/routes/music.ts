import express, { Request, Response } from 'express';
import {
  createMusic,
  getAllMusic,
  getMusic,
  getMusicById,
  queryFilter,
} from '../controllers/music';

const router = express.Router();

router.get('/', queryFilter, getAllMusic);

router.get('/:id', getMusicById, getMusic);

router.post('/', createMusic);

export default router;
