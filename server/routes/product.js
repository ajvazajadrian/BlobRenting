const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const uploadCloud = require('../config/cloudinary.js');

const Product = require("../models/product")

//post route to create a new product

router.post("/create", uploadCloud.single('picture'), (req, res, next) => {
    console.log(req.file.url)
    Product.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        customer: mongoose.Types.ObjectId(req.body.customer),
        picture: req.file.url,
        price: req.body.price
    })
    .then(response => {
        console.log("project saved 💾");
        res.send({ response }) // after creating the product, you send the information from the backend to the frontend
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})
//send list to frontend
router.get("/products", (req, res, next) => {
    Product.find()
    .then(products => {
        console.log('product reached')
        res.send(products);
    })
    .catch((err) => {
        console.log(err)
        res.send(err)
    })
})

module.exports = router;
