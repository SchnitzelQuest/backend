import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    category: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true }
}, {versionKey: false})

module.exports = mongoose.model('Question', questionSchema,'question');