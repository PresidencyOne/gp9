const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');

// Models
const LostFound = require('./models/LostFound');
const GamingRegistration = require('./models/GamingRegistration');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://PresidencyOne:PresidencyOne9@cluser0.lx8yyei.mongodb.net/PresidencyOne?retryWrites=true&w=majority&appName=cluser0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Error:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Multer config (for Lost & Found image upload)
const upload = multer({ dest: 'uploads/' });

// ✅ Route: Submit Lost & Found item
app.post('/submit', upload.single('image'), async (req, res) => {
  const { name, email, type, description } = req.body;
  const imagePath = req.file?.path;

  try {
    const imageData = imagePath ? fs.readFileSync(imagePath, { encoding: 'base64' }) : '';

    const newEntry = new LostFound({
      name,
      email,
      type,
      description,
      image: imagePath ? `data:${req.file.mimetype};base64,${imageData}` : '',
    });

    await newEntry.save();
    if (imagePath) fs.unlinkSync(imagePath); // Clean up temp file
    res.redirect('/submit.html');
  } catch (err) {
    console.error('❌ Error saving LostFound:', err);
    res.status(500).send('Error saving entry');
  }
});

// ✅ Route: Get all Lost & Found items
app.get('/items', async (req, res) => {
  try {
    const items = await LostFound.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});

// ✅ Route: Delete Lost & Found item
app.delete('/delete/:id', async (req, res) => {
  try {
    await LostFound.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted');
  } catch (err) {
    res.status(500).send('Failed to delete');
  }
});

// ✅ Route: Submit Gaming Club Registration
app.post('/submit-gaming-registration', async (req, res) => {
  console.log('📥 Incoming gaming form:', req.body); // Debug line

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
