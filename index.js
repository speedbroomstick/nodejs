const express = require('express');
const path = require('path');
const posts = require('./postsEnglish');

const app = express();
const PORT = 3000;

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
