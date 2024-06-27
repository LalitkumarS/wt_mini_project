const express = require('express');
const router = express.Router();
const User = require('../models/user');


// Login endpoint
router.post('/login', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
      } catch (error) {
        res.status(400).send(error);
      }
    });
    
module.exports = router;
