const mongoose = require('mongoose')


const User = mongoose.Squema({
    username: {
        type: String,
        required: True,
        uniqued: True,
    }
    
})