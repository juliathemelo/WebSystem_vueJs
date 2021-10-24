const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    team: {
        type:  mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'team'
    },

    name: {
        type: String,
        required: true
    },

    quantidade: {
        type: Number,
        required: true
    },

    descricao: {
        type: String,
        required: true
    },

    preco: {
        type: Number,
        required: true
    }, 

}, {
    versionKey: false
})

module.exports = mongoose.model('product', ProductSchema)