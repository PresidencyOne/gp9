// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');

// Models
const LostFound = require('./models/LostFound');
const GamingRegistration = require('./models/GamingRegistration');
const CricketRegistration = require('./models/CricketRegistration');


const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://PresidencyOne:PresidencyOne9@cluser0.lx8yyei.mongodb.net/PresidencyOne?retryWrites=true&w=majority&appName=cluser0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Error:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve images

// Multer config (for Lost & Found image upload)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// ✅ Route: Submit Lost & Found item
app.post('/submit', upload.single('image'), async (req, res) => {
  const { name, email, type, description } = req.body;
  const imagePath = req.file?.filename; // Save filename only

  try {
    const newEntry = new LostFound({
      name,
      email,
      type,
      description,
      image: imagePath || '',
    });

    await newEntry.save();
    console.log('✅ LostFound entry saved:', newEntry);

    res.redirect('/submit.html');
  } catch (err) {
    console.error('❌ Error saving LostFound:', err);
    res.status(500).send('Error saving entry');
  }
});

// ✅ Route: Get all Lost & Found items
app.get('/items', async (req, res) => {
  try {
    const items = await LostFound.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error('❌ Fetch Error:', err);
    res.status(500).json({ message: 'Error fetching items' });
  }
});

// ✅ Route: Delete Lost & Found item
app.delete('/delete/:id', async (req, res) => {
  try {
    const doc = await LostFound.findByIdAndDelete(req.params.id);
    if (doc?.image) {
      const imageFile = path.join(__dirname, 'uploads', doc.image);
      if (fs.existsSync(imageFile)) fs.unlinkSync(imageFile);
    }
    res.status(200).send('Deleted');
  } catch (err) {
    console.error('❌ Delete Error:', err);
    res.status(500).send('Failed to delete');
  }
});

// ✅ Route: Submit Gaming Club Registration
app.post('/submit-gaming-registration', async (req, res) => {
  try {
    const registration = new GamingRegistration(req.body);
    await registration.save();
    console.log('✅ Gaming registration saved');
    res.send('Form submitted successfully!');
  } catch (err) {
    console.error('❌ Error saving gaming registration:', err);
    res.status(500).send('Error saving form');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


app.post('/submit-cricket-registration', async (req, res) => {
  try {
    const registration = new CricketRegistration(req.body);
    await registration.save();
    console.log('✅ Cricket registration saved:', registration);
    res.send('Thanks for registering with the Cricket Club!');
  } catch (err) {
    console.error('❌ Error saving cricket registration:', err);
    res.status(500).send('Failed to submit form');
  }
});
