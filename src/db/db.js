var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(process.env.PATH_TO_SECRET),
  databaseURL: process.env.DB_URL
});

var firestore = admin.firestore();

var events = firestore.collection('Events')
var images = firestore.collection('Images')

module.exports = { events, images };