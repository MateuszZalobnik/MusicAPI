"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMusicById = exports.queryFilter = exports.createMusic = exports.getAllMusic = exports.getMusic = void 0;
const music_1 = __importDefault(require(".././models/music"));
const getMusic = (req, res) => {
    res.json(res.locals.music);
};
exports.getMusic = getMusic;
const getAllMusic = (req, res) => {
    res.json(res.locals.music);
};
exports.getAllMusic = getAllMusic;
const createMusic = (req, res) => {
    const { title, artist, category, bpm, camelot, album, year } = req.body;
    let data = {
        title: title,
        artist: artist,
        category: category,
        bpm: bpm,
        camelot: camelot,
    };
    if (album) {
        data = Object.assign(Object.assign({}, data), { album });
    }
    if (year) {
        data = Object.assign(Object.assign({}, data), { year });
    }
    if (title && artist && category && bpm && camelot) {
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
const queryFilter = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bpm_gt, bpm_lt, camelot, title } = req.query;
    let music = null;
    try {
        music = yield music_1.default.find();
        if (music == null) {
            return res.status(404).json({ message: 'Cannot find music' });
        }
        if (bpm_gt) {
            music = music.filter((doc) => doc.bpm >= Number(bpm_gt));
        }
        if (bpm_lt) {
            music = music.filter((doc) => doc.bpm <= Number(bpm_lt));
        }
        if (camelot) {
            music = music.filter((doc) => {
                if (doc.camelot)
                    return doc.camelot.toLowerCase() === String(camelot).toLowerCase();
            });
        }
        if (title) {
            const titleSearchPhrase = String(title).toLowerCase();
            music = music.filter((doc) => doc.title.toLowerCase().indexOf(titleSearchPhrase) !== -1);
        }
    }
    catch (err) {
        return res.status(500).send(err);
    }
    res.locals.music = music;
    next();
});
exports.queryFilter = queryFilter;
const getMusicById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    let music = null;
    try {
        music = yield music_1.default.findById(id);
        if (music == null) {
            return res.status(404).json({ message: 'Cannot find music' });
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.locals.music = music;
    next();
});
exports.getMusicById = getMusicById;
