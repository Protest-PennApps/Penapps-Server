var admin = require("firebase-admin");

console.log(process.env.PATH_TO_SECRET)
admin.initializeApp({
  credential: admin.credential.cert(process.env.PATH_TO_SECRET),
  databaseURL: process.env.DB_URL
});

var events = admin.database().ref('Events');

//events.child('Sample Event').set({'Event Title': 'Sample Event', 'Event Sample Entry': 'Test Event'})

module.exports = events;