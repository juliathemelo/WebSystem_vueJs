const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true
    },

    ramo: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }
    
},{
    versionKey: false
})

module.exports = mongoose.model('team', TeamSchema)