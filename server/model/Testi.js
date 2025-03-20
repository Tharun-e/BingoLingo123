import mongoose, { Schema } from "mongoose";

const schems = new Schema({
    username: String,
    language: String,
    feed: String,
});

export const Resi = mongoose.model('Resi', schems, 'testimo')