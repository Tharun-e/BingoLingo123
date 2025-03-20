import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    email: String,
    password: String,
    language:String,
     
});

export const Res = mongoose.model('Users', schema);
