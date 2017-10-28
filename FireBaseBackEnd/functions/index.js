const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.getAllPosts = functions.https.onRequest((req, res) => {
    var postsRef = admin.database().ref('post');
    postsRef.once('value').then(function(snap) {
      res.status(200).json( snap.val()).end();
    });
});

exports.getAllPlaces = functions.https.onRequest((req, res) => {
    
    var userID = req.url.substring(req.url.lastIndexOf('/')+1);
    var postsRef = admin.database().ref('/places/{userID}');
    
    console.log("url " + url);
    postsRef.once('value').then(function(snap) {
        var places = snap.val();
       // console.log("places" + req.params.userID);
      res.status(200).json( places).end();
    });
});