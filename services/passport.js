const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


var User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done)=> {
  User.findById(id).then((user)=> {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    proxy: true
},
    function (accessToken, refreshToken, profile, done) {
        User.findOne({ googleId: profile.id }).then((existingUser => {
            if (existingUser) {

                done(null, existingUser);

            } else {
                new User({ googleId: profile.id }).save().then(savedUser => done(null, savedUser));
            }
        }
        ))

        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });

    }
));