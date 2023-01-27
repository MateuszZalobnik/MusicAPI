"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('strictQuery', true);
const url = process.env.DATABASE_URL;
if (url) {
    mongoose_1.default
        .connect(url)
        .then(() => {
        console.log('Connected to MongoDB');
    })
        .catch((error) => {
        console.log('Error connecting to MongoDB: ', error);
    });
}
const db = mongoose_1.default.connection;
exports.default = db;
