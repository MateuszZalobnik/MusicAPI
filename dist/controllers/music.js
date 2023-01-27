"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMusic = exports.getMusic = void 0;
const music_1 = __importDefault(require(".././models/music"));
const getMusic = (req, res) => {
    music_1.default.find((err, music) => {
        if (err)
            return res.status(500).send(err);
        let data = music;
        if (req.query.bpm_gt) {
            data = data.filter((doc) => doc.bpm >= Number(req.query.bpm_gt));
        }
        if (req.query.bpm_lt) {
            data = data.filter((doc) => doc.bpm <= Number(req.query.bpm_lt));
        }
        return res.status(200).send(data);
    });
};
exports.getMusic = getMusic;
const createMusic = (req, res) => {
    const { title, artist, category, bpm } = req.body;
    let data = {
        title: title,
        artist: artist,
        category: category,
        bpm: bpm,
    };
    if (req.body.album) {
        const album = req.body.album;
        data = Object.assign(Object.assign({}, data), { album });
    }
    if (req.body.camelot) {
        const camelot = req.body.camelot;
        data = Object.assign(Object.assign({}, data), { camelot });
    }
    if (req.body.year) {
        const year = req.body.year;
        data = Object.assign(Object.assign({}, data), { year });
    }
    if (title && artist && category && bpm) {
        const music = new music_1.default(Object.assign({}, data));
        music.save(function (err, music) {
            if (err)
                return res.status(500).json({ message: err });
            res.status(202).json({ message: title + ' saved to database.' });
        });
    }
    else {
        res.status(400).send('Empty value');
    }
};
exports.createMusic = createMusic;
