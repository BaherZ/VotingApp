const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

const keys = require('./config/keys');
//const authenticate = require('./authenticate');
//const verify = require('./verify'); 

const port = process.env.PORT || 3001;

const app = express();
app.use(cookieParser())


mongoose.connect(keys.mongodb.dbURI)
    .then(() => {
        mongoose.connection.on('error', err => {
            console.log('mongoose connection error: '+err);
        });

        console.log('connected - attempting reconnect');
        return mongoose.connect(keys.mongodb.dbURI);
    })
    .catch(err => {
        console.log('rejected promise: '+err);
        mongoose.disconnect();
    });

app.listen(port,()=>{
    console.log(`conencted to port ${port}`);
})