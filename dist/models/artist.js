"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const artistSchema = new mongoose_1.default.Schema({
    artistName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    surname: {
        type: String,
        required: false,
    },
});
exports.default = mongoose_1.default.model('Artist', artistSchema);
