const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4005;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/profileDB', { useNewUrlParser: true, useUnifiedTopology: true });

const profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  bio: String,
  motherTongue: String,
  religion: String,
  caste: String,
  education: String
});

const Profile = mongoose.model('Profile', profileSchema);

app.post('/api/create-profile', async (req, res) => {
  try {
    const newProfile = new Profile(req.body);
    await newProfile.save();
    res.status(200).send('Profile data saved successfully');
  } catch (err) {
    res.status(500).send('Error saving profile data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
