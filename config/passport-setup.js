const { verify } = require('crypto');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Users = require('../models/user-models')



passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(ull, user)
}
)

passport.use(
    new GoogleStrategy(
        {
            callback: '/auth/google/redirect',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        },
        (accessToken, refreshToken, profile, done) => {
            verifyGoogleUser({profile, token: accessToken}, done)
          
        }
    )
);

const verifyGoogleUser = async (obj, done) => {
    const {profile, token } = obj;
    const user = await Users.getByEmail(profile.emails[0].value).catch(err => console.log(err))

    try {
        if (!user) {
            const [id] = await Users.add({
                display_name: profile.displayName,
                email: profile.emails[0].value,
                google_id: profile.id,
                pic: profile._json.picture,
            });
            done(null, await Users.getById(id), token);
        } else {
            done(null, user, token)
        }
    } catch(err) {
        console.log(err)
    }
};