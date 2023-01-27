"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const data = [
    {
        "key": "value",
        "key2": "value2"
    },
    {
        "key3": "value3",
        "key4": "value4"
    },
];
router.get('/', (req, res) => {
    res.json(data);
});
exports.default = router;
