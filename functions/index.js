const functions = require('firebase-functions');
const firebase = require('firebase-admin')
const express = require('express')
const bodyParser = require('body-parser')

var serviceAccount = require("./recsys-24560-firebase-adminsdk-xy8qk-98e68dc049.json");

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const firebaseConfig = {
    apiKey: "AIzaSyBCA9AeUIOdmRCZYVW_qcBAtZSz7kkqLJU",
    authDomain: "recsys-24560.firebaseapp.com",
    databaseURL: "https://recsys-24560.firebaseio.com",
    projectId: "recsys-24560",
    storageBucket: "recsys-24560.appspot.com",
    messagingSenderId: "259570855306",
    appId: "1:259570855306:web:fe0d7f0aca8bef6aa96c73"
  };

const AdminSDK = {
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://recsys-24560.firebaseio.com"
}
// Initialize Firebase
firebase.initializeApp(AdminSDK)


app.set('views', `./views`); 
app.set('view engine', `hbs`);

app.get('/login', (req,res) => {
    res.render('login.hbs')
})

app.get('/home', (req,res) => {
    res.render('home.hbs')
})

exports.app = functions.https.onRequest(app);
 