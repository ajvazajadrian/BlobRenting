const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/signup", (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const mobile = req.body.mobile;
    
    User.findOne({email: email})
    .then(user => {
        if(user){ 
            res.send("email already taken")
    }   else {
        bcrypt.hash(password, 10, (err, hash) => {
            if(err){
                res.send(err.message)
            }else {
                User.create({
                    email: email,
                    password: hash,
                    firstname: firstname,
                    lastname: lastname,
                    mobile: mobile,
                })
                .then(user => {
                    res.send({ user });
                })
                .catch(err => {
                    res.send(err);
                });
            }
        });
    }
    
})
    .catch(err => {
        res.send(err);
    });
});


router.post("/login", (req,res)=> {
    debugger
    const email = req.body.email;

    User.findOne({email})
        .then(user => {
            console.log(user)
            if(!user){
            res.status(400).send("user does not exist 😵")
        }
        bcrypt.compare(req.body.password, user.password, (error, equal) => { 
            if(equal) {
                let { email, firstname, lastname, id } = user;
                let sessionData = { email, firstname, lastname, id };
                req.session.user = sessionData;
                console.log("customer logged in 🗝 🔓")
                res.json(sessionData)
            }else if(!equal){
                console.log("email or password incorrect! ❌🔐")
            }else {
                console.log(error)
            }
        })  
    })
       
     
})

module.exports = router




