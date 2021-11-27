const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const User = require('../models/User');

const getUsers = (req, res, next) => 
{
    User.find()
        .exec()
        .then(result => { res.status(200).json(result); })
        .catch(err => { res.status(500).json({ err: err }); });
}

const deleteUser = (req, res, next) => 
{
    User.remove({ _id: req.params.userId })
        .exec()
        .then(result => res.status(200).json({ message: "User deleted"}))
        .catch(err => res.status(500).json({ err: err }));
}

const login = (req, res, next) => 
{
    User.findOne({ email: req.body.email })
        .exec()
        .then(user =>
        {
            if(user == null)
                return res.status(400).send({ message: "User not found."}); 

            bcrypt.compare(req.body.password, user.password, (err, result) => 
            {
                if(err) 
                    return res.status(401).json({ message: err });
         
                if(result)
                   return res.status(200).json({ message: "User logged in." });
         
                res.status(400).send({ message : "Wrong password"});

            });
        })
        .catch(err =>  res.status(500).json({ err: err }) );
}

const signUp = (req, res, next) => 
{
    User.findOne({ email: req.body.email })
        .exec()
        .then(user => 
        {
            if(user != null) 
                return res.status(409).json({ message: "Mail exists" });
            else 
            {
                bcrypt.hash(req.body.password, 10, (err, hash) => 
                {
                    if(err) 
                        return res.status(500).json({error: err});
                    else 
                    {
                        const newUser = new User(
                        {
                            _id: new mongoose.Types.ObjectId(),
                            name: req.body.name,
                            lastName: req.body.lastName,
                            sex: req.body.sex,
                            email: req.body.email,
                            password: hash
                        });

                        newUser.save()
                               .then(result => res.status(201).json({message: "User created", data: newUser}))
                               .catch(err => res.status(500).json({error: err}));
                    }
            });
        }
    });
}

module.exports = {getUsers, deleteUser, login, signUp};