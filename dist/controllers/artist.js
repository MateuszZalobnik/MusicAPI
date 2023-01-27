"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArtist = exports.getArtist = void 0;
const artist_1 = __importDefault(require(".././models/artist"));
const getArtist = (req, res) => {
    artist_1.default.find((err, doc) => {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send(doc);
    });
};
exports.getArtist = getArtist;
const createArtist = (req, res) => {
    const { artistName } = req.body;
    let data = {
        artistName: artistName,
    };
    if (req.body.name) {
        const name = req.body.name;
        data = Object.assign(Object.assign({}, data), { name });
    }
    if (req.body.surname) {
        const surname = req.body.surname;
        data = Object.assign(Object.assign({}, data), { surname });
    }
    if (artistName) {
        const artist = new artist_1.default(Object.assign({}, data));
        artist.save(function (err, doc) {
            if (err)
                return res.status(500).json({ message: err });
            res.status(202).json({ message: artistName + ' saved to database.' });
        });
    }
    else {
        res.status(400).send('Empty value');
    }
};
exports.createArtist = createArtist;
