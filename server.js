const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const LostFound = require('./models/LostFound');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection



mongoose.connect('mongodb+srv://PresidencyOne:PresidencyOne9@cluser0.lx8yyei.mongodb.net/LostFound?retryWrites=true&w=majority&appName=cluser0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'));

// Multer config (store temporarily, we'll convert to base64)
const upload = multer({ dest: 'uploads/' });

// ✅ POST /submit: handles form submission
app.post('/submit', upload.single('image'), (req, res) => {
  const { name, email, type, description } = req.body;

  const imagePath = req.file.path;
  const imageData = fs.readFileSync(imagePath, { encoding: 'base64' });

  const newEntry = new LostFound({
    name,
    email,
    type,
    description,
    image: `data:${req.file.mimetype};base64,${imageData}`,
  });

  newEntry.save()
    .then(() => {
      fs.unlinkSync(imagePath); // cleanup uploaded file
      res.redirect('/submit.html');
    })
    .catch(err => res.status(500).send('Error saving entry'));
});

// ✅ GET /items: return all items
app.get('/items', async (req, res) => {
  try {
    const items = await LostFound.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// ✅ DELETE /delete/:id
app.delete('/delete/:id', async (req, res) => {
  try {
    await LostFound.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted');
  } catch (err) {
    res.status(500).send('Failed to delete');
  }
});
