const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

// Check for connection
db.once('open', () => console.log('Connected to MongoDB'));

// Check for DB errors
db.on('error', (error) => console.log(error));

// Init app
const app = express();

// Bring in models
let Article = require('./models/article');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home route
app.get('/', function(req, res) {
  Article.find({}, function(err, articles) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Articles',
        articles: articles
      });
    }
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
