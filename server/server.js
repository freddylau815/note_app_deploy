const express = require('express');
const db = require('./config/connection');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3333;

// Import Routes
const api_routes = require('./routes/api_routes');

// Open Middleware
app.use(express.json());

// Load Routes
app.use('/api', api_routes);

app.use(express.static('../client/dist'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('..client/dist'));

  // Grab every route wiht wildcard *

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

db.on('open', () => {
  // Start the server
  app.listen(PORT, () => console.log('Server started on', PORT));
});
