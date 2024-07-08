const express = require('express');
const path = require('path');
const cors = require('cors');
const postsEnglish = require('./postsEnglish');
const postsRussian = require('./postsRussian');

const app = express();
const PORT = 3000;

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/posts', (req, res) => {
  const lang = req.headers['accept-language'] || 'en';
  if (lang.includes('ru')) {
    res.status(200).json(postsRussian);
  } else {
    res.status(200).json(postsEnglish);
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
