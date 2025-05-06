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
const NCCRegistration = require('./models/NCCRegistration');
const ToastmastersRegistration = require('./models/ToastmastersRegistration');
const DanceRegistration = require('./models/DanceRegistration');
const SingingRegistration = require('./models/SingingRegistration');
const AnchorRegistration = require('./models/AnchorRegistration');
const NSSRegistration = require('./models/NSSRegistration');
const CodingRegistration = require('./models/CodingRegistration');
const BasketballRegistration = require('./models/BasketballRegistration');
const BadmintonRegistration = require('./models/BadmintonRegistration');
const HandballRegistration = require('./models/HandballRegistration');
const KabaddiRegistration = require('./models/KabaddiRegistration');
const VolleyballRegistration = require('./models/VolleyballRegistration');
const EuphoriaRegistration = require('./models/EuphoriaRegistration');
const InvinciaRegistration = require('./models/InvinciaRegistration');
const Newsletter = require('./models/Newsletter');
const Complaint = require('./models/Complaint'); 









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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



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
//tryy
app.post('/submit-gaming-registration', async (req, res) => {
  try {
    const registration = new GamingRegistration(req.body);
    await registration.save();
    console.log('✅ gaming registration saved:', registration);
    res.send('Thanks for registering with the gaming Club!');
  } catch (err) {
    console.error('❌ Error saving gaming registration:', err);
    res.status(500).send('Failed to submit form');
  }
});

app.post('/submit-nss-registration', async (req, res) => {
  try {
    const registration = new NSSRegistration(req.body);
    await registration.save();
    console.log('✅ nss registration saved:', registration);
    res.send('Thanks for registering with the nss Club!');
  } catch (err) {
    console.error('❌ Error saving nss registration:', err);
    res.status(500).send('Failed to submit form');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});



app.post('/submit-ncc-registration', async (req, res) => {
  try {
    const registration = new NCCRegistration(req.body);
    await registration.save();
    console.log('✅ ncc registration saved:', registration);
    res.send('Thanks for registering with the ncc Club!');
  } catch (err) {
    console.error('❌ Error saving ncc registration:', err);
    res.status(500).send('Failed to submit form');
  }
});



app.post('/submit-toastmasters-registration', async (req, res) => {
  try {
    const registration = new ToastmastersRegistration(req.body);
    await registration.save();
    console.log('✅ Toastmasters registration saved:', registration);
    res.send('Thanks for registering with the Toastmasters Club!');
  } catch (err) {
    console.error('❌ Error saving Toastmasters registration:', err);
    res.status(500).send('Failed to submit form');
  }
});

//Complaint box
app.post('/submit-complaint', async (req, res) => {
  console.log("Incoming complaint:", req.body); 
  try {
    const { name, studentId, email, department, complaintType, complaintDetails, suggestions } = req.body;
    const complaint = new Complaint({ name, studentId, email, department, complaintType, complaintDetails, suggestions });
    await complaint.save();
    console.log('✅ Complaint saved:', complaint);
    res.send('Complaint submitted successfully.');
  } catch (err) {
    console.error('❌ Error saving complaint:', err); 
    res.status(500).send('Error saving complaint.');
  }
});




app.post('/submit-dance-registration', async (req, res) => {
  try {
    const { name, roll, email, phone,school, 'danceStyle': danceStyle, 'experience': experience } = req.body;
    const registration = new DanceRegistration({ name, roll, email, phone, school, danceStyle, experience });
    await registration.save();
    console.log('✅ Dance registration saved:', registration);
    res.send('Thanks for registering with the Dance Club!');
  } catch (err) {
    console.error('❌ Error saving dance registration:', err);
    res.status(500).send('Failed to submit form');
  }
});


app.post('/submit-singing-registration', async (req, res) => {
  try {
    const { name, roll, email, phone, department, 'experience': experience } = req.body;
    const registration = new SingingRegistration({ name, roll, email, phone, department, experience });
    await registration.save();
    console.log('✅ Singing registration saved:', registration);
    res.send('Thanks for registering with the Singing Club!');
  } catch (err) {
    console.error('❌ Error saving singing registration:', err);
    res.status(500).send('Failed to submit form');
  }
});


app.post('/submit-anchor-registration', async (req, res) => {
  try {
    const { name,roll, email, phone, 'school':school, 'interest':interest } = req.body;
    const registration = new AnchorRegistration({ name,roll, email, phone, school, interest });
    await registration.save();
    console.log('✅ Anchor registration saved:', registration);
    res.send('Thanks for registering with the Anchors & Speakers Club!');
  } catch (err) {
    console.error('❌ Error saving anchor registration:', err);
    res.status(500).send('Failed to submit form');
  }
});





app.post('/submit-coding-registration', async (req, res) => {
  try {
    const { name,roll, email, phone, school, 'skills' : skills } = req.body;
    const registration = new CodingRegistration({ name, roll, email, phone, school, skills });
    await registration.save();
    console.log('✅ Coding registration saved:', registration);
    res.send('Thanks for registering with the Coding Club!');
  } catch (err) {
    console.error('❌ Error saving coding registration:', err);
    res.status(500).send('Failed to submit form');
  }
});


app.post('/submit-basketball-registration', async (req, res) => {
  try {
    const { name, roll, email, phone, school, role } = req.body;
    const registration = new BasketballRegistration({ name, roll, email, phone, school, role });
    await registration.save();
    console.log('✅ Basketball registration saved:', registration);
    res.send('Thanks for registering for Basketball Blitz!');
  } catch (err) {
    console.error('❌ Error saving basketball registration:', err);
    res.status(500).send('Failed to submit form');
  }
});

app.post('/submit-badminton-registration', async (req, res) => {
  try {
    const { name, roll, email, phone, school, role } = req.body;
    const registration = new BadmintonRegistration({ name, roll, email, phone, school, role });
    await registration.save();
    console.log('✅ Badminton registration saved:', registration);
    res.send('Thanks for registering for Badminton Blast!');
  } catch (err) {
    console.error('❌ Error saving badminton registration:', err);
    res.status(500).send('Failed to submit form');
  }
});


app.post('/submit-handball-registration', async (req, res) => {
  try {
    const { name, roll, email, phone, school, role } = req.body;
    const registration = new HandballRegistration({ name, roll, email, phone, school, role });
    await registration.save();
    console.log('✅ Handball registration saved:', registration);
    res.send('Thanks for registering for Handball Hustle!');
  } catch (err) {
    console.error('❌ Error saving handball registration:', err);
    res.status(500).send('Failed to submit form');
  }
});


app.post('/submit-kabaddi-registration', async (req, res) => {
  try {
    const { name, roll, email, phone, school, role } = req.body;
    const registration = new KabaddiRegistration({ name, roll, email, phone, school, role });
    await registration.save();
    console.log('✅ Kabaddi registration saved:', registration);
    res.send('Thanks for registering for Kabaddi Kraze!');
  } catch (err) {
    console.error('❌ Error saving kabaddi registration:', err);
    res.status(500).send('Failed to submit form');
  }
});


app.post('/submit-volleyball-registration', async (req, res) => {
  try {
    const { name, roll, email, phone, school, role } = req.body;
    const registration = new VolleyballRegistration({ name, roll, email, phone, school, role });
    await registration.save();
    console.log('✅ Volleyball registration saved:', registration);
    res.send('Thanks for registering for Volleyball Passion!');
  } catch (err) {
    console.error('❌ Error saving volleyball registration:', err);
    res.status(500).send('Failed to submit form');
  }
});




//NewsLetter
app.post('/subscribe-newsletter', async (req, res) => {
  const { email } = req.body;

  try {
    const newSubscription = new Newsletter({ email });
    await newSubscription.save();
    console.log('✅ Newsletter subscription saved:', email);
    res.redirect('/'); // Redirect to homepage or show a thank you page
  } catch (err) {
    console.error('❌ Error saving newsletter subscription:', err);
    res.status(500).send('Failed to subscribe');
  }
});

app.post('/submit-euphoria-registration', async (req, res) => {
  try {
    const registration = new EuphoriaRegistration(req.body);
    await registration.save();
    console.log('✅ Euphoria registration saved:', registration);
    res.send('Thanks for registering in Euphoria!');
  } catch (err) {
    console.error('❌ Error saving Euphoria registration:', err);
    res.status(500).send('Failed to submit form');
  }
});

app.post('/submit-invincia-registration', async (req, res) => {
  try {
    const registration = new InvinciaRegistration(req.body);
    await registration.save();
    console.log('✅ Invincia registration saved:', registration);
    res.send('Thanks for registering in Invincia!');
  } catch (err) {
    console.error('❌ Error saving Invincia registration:', err);
    res.status(500).send('Failed to submit form');
  }
});


