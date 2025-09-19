const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Backend is up and running! 🚀');
});


app.post('/contact', (req, res) => {
  console.log('Form data received:', req.body);
  res.status(200).json({ message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
