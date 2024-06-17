"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const questionSchema = new mongoose_1.default.Schema({
    category: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true }
}, { versionKey: false });
module.exports = mongoose_1.default.model('Question', questionSchema, 'question');
