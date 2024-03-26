import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type : String,
        required: true,
        min : 3,
        max : 50
    },
    lastName: {
        type : String,
        required: true,
        min : 3,
        max : 50
    },
    email: {
        type : String,
        required: true,
        unique: true,
        max : 50
    },
    password: {
        type : String,
        required: true,
        min : 6
    },
    picturePath: {
        type : String,
        default: 'public/assets/default.png'
    },
    friends: {
        type : Array,
        default: []
    },
    location: String,
    occupation: String,
    viewdProfile: Number,
    impressions: Number,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;