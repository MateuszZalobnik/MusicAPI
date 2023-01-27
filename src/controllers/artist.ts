import { Request, Response } from 'express';
import Artist from '.././models/artist';

export const getArtist = (req: Request, res: Response) => {    
  Artist.find((err, doc) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(doc);
  });
};

export const createArtist = (req: Request, res: Response) => {
  const { artistName } = req.body;
  let data: {
    artistName: string;
    name?: string;
    surname?: string;
  } = {
    artistName: artistName,
  };
  if (req.body.name) {
    const name: string = req.body.name;
    data = { ...data, name };
  }
  if (req.body.surname) {
    const surname = req.body.surname;
    data = { ...data, surname };
  }
  
  if (artistName) {
    const artist = new Artist({
      ...data,
    });
    artist.save(function (err, doc) {
      if (err) return res.status(500).json({ message: err });
      res.status(202).json({ message: artistName + ' saved to database.' });
    });
  } else {
    res.status(400).send('Empty value');
  }
};
