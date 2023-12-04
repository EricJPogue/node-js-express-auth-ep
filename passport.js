const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2')
const passport = require('passport')


// THIS IS WHERE YOU GET THE GOOGLE CLIENT ID'S
// //https://console.cloud.google.com/apis/credentials


// TYPE YOUR CLIENT ID'S AND SECRET ID'S HERE. AFTER THAT YOU CAN UNCOMMENT AND PUSH TO GITHUB. 

// const GOOGLE_CLIENT_ID = "20848....."
// const GOOGLE_CLIENT_SECRET = "GOCSP...."

const GITHUB_CLIENT_ID = "b0c9b515bb239eb29a28"
const GITHUB_CLIENT_SECRET = "3d6a075807c2ce0c382f6f747199d3db5b1c89ff"


// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done, /* done */) {
//     //IF YOU WANT TO USE A DATABASE TO STORE USERS, USE THIS CODE 
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return cb(err, user);
//     // });
//     console.log(profile)
//     done(null, profile)
//   }
// ));


passport.use(new GitHubStrategy({
		clientID: GITHUB_CLIENT_ID,
		clientSecret: GITHUB_CLIENT_SECRET,
		callbackURL: "/auth/github/callback"
	},
	function(accessToken, refreshToken, profile, done) {
		console.log(profile)
		done(null, profile)
	}
));


passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})