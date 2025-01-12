const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const buahRoutes = require('./routes/buah'); // Pastikan path ini benar
const { Buah } = require('./models'); // Pastikan model Buah sudah di-import dengan benar

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());  // Menggunakan CORS untuk mengizinkan akses lintas domain
app.use(bodyParser.json());  // Parsing body dengan JSON
app.use(express.json()); // Jika Anda menggunakan JSON sebagai format request

// Set View Engine ke EJS
app.set('view engine', 'ejs'); // Pastikan ini sudah ada setelah middleware

// Routes
// Menambahkan route dari file buah.js di folder routes
app.use('/buah', buahRoutes); // Rute untuk API buah (GET, POST, dsb.)

// Route utama untuk halaman utama
app.get('/', (req, res) => {
  res.send('Selamat datang di API Buah!');
});

// Route untuk menampilkan semua buah dalam format JSON
app.get('/buah', async (req, res) => {
  try {
    const buahs = await Buah.findAll(); // Mengambil semua data dari database Buah
    res.json(buahs);  // Mengembalikan data buah dalam format JSON
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});

// Route untuk menampilkan data buah dalam format HTML dengan EJS
app.get('/buah-html', async (req, res) => {
  try {
    const buahs = await Buah.findAll(); // Mengambil semua data buah dari database
    res.render('buah', { buahs });  // Mengirim data buah ke dalam view (buah.ejs)
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
