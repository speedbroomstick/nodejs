const express = require('express');
const path = require('path');
const cors = require('cors');
const postsEnglish = require('./postsEnglish');
const postsRussian = require('./postsRussian');
const authorsEnglish = require('./authorsEnglish');
const authorsRussian = require('./authorsRussian');
const app = express();
const PORT = 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/avatar', express.static(path.join(__dirname, 'public/avatar')));

app.get('/authors', (req, res) => {
  const lang = req.headers['accept-language'] || 'en';
  const limit = parseInt(req.query.limit, 10) || 4;

  const authors = lang.includes('ru') ? authorsRussian : authorsEnglish;

  const slicedAuthors = authors.slice(0, limit);

  res.status(200).json({ authors: slicedAuthors });
});

app.get('/authors/:id', (req, res) => {
  const lang = req.headers['accept-language'] || 'en';
  const id = req.params.id;
  console.log(id)
  const authors = lang.includes('ru') ? authorsRussian : authorsEnglish;

  const author = authors.find(author => author.id === parseInt(id));

  if (author) {
    res.status(200).json({ author });
  } else {
    res.status(404).send('Author Not Found');
  }
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

app.get('/posts/:id', (req, res) => {
  const lang = req.headers['accept-language'] || 'en';
  const id = req.params.id;

  const posts = lang.includes('ru') ? postsRussian : postsEnglish;

  const post = posts.find(post => post.id === parseInt(id));

  if (post) {
    res.status(200).json({ post });
  } else {
    res.status(404).send('Post Not Found');
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
