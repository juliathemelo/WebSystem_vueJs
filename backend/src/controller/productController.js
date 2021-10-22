const Product = require('../model/product')
const mongoose = require('mongoose')

const createProduct = async (req, res) => {
    const product = new Product ({
        _id: new mongoose.Types.ObjectId(),
        team: req.body.team,
        name: req.body.name,
        quantidade: req.body.quantidade,
        descricao: req.body.descricao,
        preco: req.body.preco
    })

    const productExist = await Product.findOne({ name: req.body.name })

    if (productExist) {
        res.status(409).send({ message: `Product already Exist In This Team`})
    }

    try {
        const newProduct = await Product.insertMany(product)
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    createProduct
}