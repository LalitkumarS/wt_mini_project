const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4010;  // Change the port number here

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/loginDB'); // Removed deprecated options

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.post('/api/login', async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    await newUser.save();
    res.status(200).send('User data saved successfully');
  } catch (err) {
    res.status(500).send('Error saving user data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
