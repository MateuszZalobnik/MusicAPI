"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
require("./db-config");
const body_parser_1 = __importDefault(require("body-parser"));
const music_1 = __importDefault(require("./routes/music"));
const artist_1 = __importDefault(require("./routes/artist"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use('/music', music_1.default);
app.use('/artist', artist_1.default);
app.get('/', (req, res) => {
    res.send('home');
});
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
