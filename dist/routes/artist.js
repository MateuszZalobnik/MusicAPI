"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const artist_1 = require("../controllers/artist");
const router = express_1.default.Router();
router.get('/', artist_1.getArtist);
router.post('/', artist_1.createArtist);
exports.default = router;
