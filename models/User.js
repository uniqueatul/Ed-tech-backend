const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true ,
        trim: true,
        
    },

    lastName: {
        type: String,
        required: true ,
        trim: true,
    },

    email: {
        type: String,
        required: true ,
        trim: true,
        
    },
    password: {
        type: String,
        required: true ,
        
    },
    accountType: {
        type: String,
        enum: ['Admin', 'student' , 'Instructor'],
        required: true
    },
    
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "profile",

    },

    course: [
        { type: mongoose.Schema.Types.ObjectId,
        ref: "course",}
     ] ,

    Image: {
        type: String,
        required: true,
    },

    courseProgress:  [
        {
        type:mongoose.Schema.types.ObjectId,
        ref: "courseProgress",
    }

    ],

});

module.exports = mongoose.model('User', userSchema);
