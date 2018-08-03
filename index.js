const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
var cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const app = express();
require('./models/User');
require('./services/passport');


mongoose.connect(keys.MONGO_URI);

app.use(cookieSession({
    name: 'session',
    keys: [keys.cookieKey],
   
    // Cookie Options
    maxAge: 30* 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT);