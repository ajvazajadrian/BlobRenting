const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    password: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    },
    mobile: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;