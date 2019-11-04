const mongoose = require("mongoose");

const rentingSchema = new mongoose.Schema({
    product: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    tenant: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    rentingPeriod: {
        type: String
    },
    startingTime: {
        type: String
    },
    endingTime:{
        type: String
    }
});

const Renting = mongoose.model("renting", rentingSchema);

module.exports = Renting;