const express = require('express');
const path = require('path');
const cors = require('cors');
const postsEnglish = require('./postsEnglish');
const postsRussian = require('./postsRussian');
const authorsEnglish = require('./authorsEnglish');
const authorsRussian = require('./authorsRussian');
const app = express();
const PORT = 3000;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/authors', (req, res) => {
  const lang = req.headers['accept-language'] || 'en';
  const authors = lang.includes('ru') ? authorsRussian : authorsEnglish;
  res.status(200).json({ authors });
});

app.get('/posts', (req, res) => {
  const lang = req.headers['accept-language'] || 'en';
  const limit = parseInt(req.query.limit, 10) || 4;
  const start = parseInt(req.query.start, 10) || 0;
  const category = req.query.category || '';
  const tags = req.query.tags ? req.query.tags.split(',') : [];

  const posts = lang.includes('ru') ? postsRussian : postsEnglish;

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = category ? post.categoryImage === category : true;
    const matchesTags = tags.length > 0 ? tags.every(tag => post.tags.includes(tag)) : true;
    return matchesCategory && matchesTags;
  });

  const totalCount = filteredPosts.length;
  const slicedPosts = filteredPosts.slice(start, start + limit);

  res.status(200).json({ posts: slicedPosts, totalCount });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
