import { NextFunction, Request, Response } from 'express';
import Music from '.././models/music';

export const getMusic = (req: Request, res: Response) => {
  res.json(res.locals.music);
};

export const getAllMusic = (req: Request, res: Response) => {
  res.json(res.locals.music);
};

export const createMusic = (req: Request, res: Response) => {
  const { title, artist, category, bpm, camelot, album, year } = req.body;

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
    camelot: camelot,
  };
  if (album) {
    data = { ...data, album };
  }
  if (year) {
    data = { ...data, year };
  }
  if (title && artist && category && bpm && camelot) {
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

export const queryFilter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bpm_gt, bpm_lt, camelot, title } = req.query;
  let music:
    | {
        bpm: number;
        camelot: string;
        title: string;
      }[]
    | null = null;

  try {
    music = await Music.find();
    if (music == null) {
      return res.status(404).json({ message: 'Cannot find music' });
    }

    if (bpm_gt) {
      music = music.filter((doc: { bpm: number }) => doc.bpm >= Number(bpm_gt));
    }
    if (bpm_lt) {
      music = music.filter((doc: { bpm: number }) => doc.bpm <= Number(bpm_lt));
    }
    if (camelot) {
      music = music.filter((doc: { camelot: string }) => {
        if (doc.camelot)
          return doc.camelot.toLowerCase() === String(camelot).toLowerCase();
      });
    }
    if (title) {
      const titleSearchPhrase = String(title).toLowerCase();
      music = music.filter(
        (doc: { title: string }) =>
          doc.title.toLowerCase().indexOf(titleSearchPhrase) !== -1
      );
    }
  } catch (err) {
    return res.status(500).send(err);
  }

  res.locals.music = music;
  next();
};

export const getMusicById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  let music = null;
  try {
    music = await Music.findById(id);
    if (music == null) {
      return res.status(404).json({ message: 'Cannot find music' });
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
  res.locals.music = music;
  next();
};
