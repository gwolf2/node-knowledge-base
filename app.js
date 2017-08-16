const express = require('express');
const path = require('path');

// Init app
const app = express();

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home route
app.get('/', function(req, res) {
  let articles = [
    {
      id: 1,
      title: 'Article One',
      author: 'Mike Jackson',
      body: 'This is article one'
    },
    {
      id: 2,
      title: 'Article Two',
      author: 'Mike Jones',
      body: 'This is article two'
    },
    {
      id: 3,
      title: 'Article Three',
      author: 'Mike Jackson',
      body: 'This is article three'
    }
  ];
  res.render('index', {
    title: 'Articles',
    articles: articles
  });
});

// Add route
app.get('/articles/add', function(req, res) {
  res.render('add_article', {
    title: 'Articles'
  });
});

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
