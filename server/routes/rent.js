const express = require("express");
const router = express.Router();
const Renting = require("../models/renting");
const mongoose = require("mongoose");
const Product = require("../models/product");


router.post('/create', (req, res, next) => {
    debugger
    let rental = "From " + req.body.startDate + " to " + req.body.endDate
    Renting.create({
        product: mongoose.Types.ObjectId(req.body.productId),
        tenant: mongoose.Types.ObjectId(req.session.user._id),
        rentingPeriod: rental,
        startingTime: req.body.startDate,
        endingTime: req.body.endDate,
    })
    .then((renting) => {
        Product.findByIdAndUpdate(req.body.productId, {availability: "unavailable"}
        ,{new: true})//the answer of the Method is the updated product
        .then(() => {
        res.json(renting)
        console.log("renting placed 💵 💶 🚀 🚨")}) 
       
        
    })
    .catch((err)=> {
        res.send(err)
    })
})


router.get('/list/:productId', (req, res, next) => {
  
    Renting.find({
        product: req.params.productId
    })
    .populate("product")
    .then((renting) => {
        res.json(renting) 
    })
    .catch((err)=> {
        res.send(err)
    })
})
module.exports = router;