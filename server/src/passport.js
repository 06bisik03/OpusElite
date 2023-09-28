const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const User = require("./models/user/user.mongo");
require("dotenv").config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ user_id: profile.id }).then((currentUser) => {
        if (!currentUser) {
            new User({
                user_name: profile.displayName,
                user_id: profile.id,
                user_picture: profile.photos[0].value,
               user_email: profile.emails[0].value,
               user_sub: "standard"
              })
                .save()
                .then((newUser) => {
                
                  done(null,newUser);
                });
           
        }  else {
            done(null,currentUser);
        }
      });

      
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null,user)
    })

});
module.exports = passport;
