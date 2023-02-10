"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const music_1 = require("../controllers/music");
const router = express_1.default.Router();
router.get('/', music_1.queryFilter, music_1.getAllMusic);
router.get('/:id', music_1.getMusicById, music_1.getMusic);
router.post('/', music_1.createMusic);
exports.default = router;
