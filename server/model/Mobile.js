import mongoose, { Schema } from "mongoose";

const schema1 = new Schema({
    email:String,
    password:String,
    language:String,
    level:{
        type:Number,
        min:0,
        max:100
    }

});

export const Mobiles = mongoose.model('enrollments',schema1);


