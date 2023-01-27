"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const musicSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: Array,
        required: true,
    },
    category: {
        type: Array,
        required: true,
    },
    bpm: {
        type: Number,
        required: true,
    },
    album: {
        type: String,
        required: false,
    },
    camelot: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: false,
    },
});
exports.default = mongoose_1.default.model('Music', musicSchema);
