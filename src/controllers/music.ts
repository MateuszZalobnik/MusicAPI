import { Request, Response } from 'express';
import Music from '.././models/music';

export const getMusic = (req: Request, res: Response) => {
  Music.find((err, music) => {
    if (err) return res.status(500).send(err);
    let data : {bpm: number}[] = music;
    if (req.query.bpm_gt) {
      data = data.filter((doc: { bpm: number }) => doc.bpm >= Number(req.query.bpm_gt));
    }
    if (req.query.bpm_lt) {
      data = data.filter((doc: { bpm: number }) => doc.bpm <= Number(req.query.bpm_lt));
    }
    return res.status(200).send(data);
  });
};

export const createMusic = (req: Request, res: Response) => {
  const { title, artist, category, bpm } = req.body;
  let data: {
    title: string;
    artist: string[];
    category: string[];
    bpm: number;
    album?: string;
    camelot?: string;
    year?: number;
  } = {
    title: title,
    artist: artist,
    category: category,
    bpm: bpm,
  };
  if (req.body.album) {
    const album: string = req.body.album;
    data = { ...data, album };
  }
  if (req.body.camelot) {
    const camelot = req.body.camelot;
    data = { ...data, camelot };
  }
  if (req.body.year) {
    const year = req.body.year;
    data = { ...data, year };
  }
  if (title && artist && category && bpm) {
    const music = new Music({
      ...data,
    });
    music.save(function (err, music) {
      if (err) return res.status(500).json({ message: err });
      res.status(202).json({ message: title + ' saved to database.' });
    });
  } else {
    res.status(400).send('Empty value');
  }
};
