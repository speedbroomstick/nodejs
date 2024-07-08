const express = require('express');
const path = require('path');
const cors = require('cors');
const postsEnglish = require('./postsEnglish');
const postsRussian = require('./postsRussian');

const app = express();
const PORT = 3001;

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/posts', (req, res) => {
  const lang = req.headers['accept-language'] || 'en';
  const limit = parseInt(req.query.limit, 10) || 4;
  const start = parseInt(req.query.start, 10) || 0;

  const posts = lang.includes('ru') ? postsRussian : postsEnglish;
  const slicedPosts = posts.slice(start, start + limit);

  res.status(200).json(slicedPosts);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
