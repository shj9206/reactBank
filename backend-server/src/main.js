/* =======================
    LOAD THE DEPENDENCIES
==========================*/
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./api/index');
const jwtMiddleware = require('./lib/jwtMiddleware');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const Schema = mongoose.Schema;

/* =======================
    Connect to MongoDB
==========================*/
const { PORT, MONGO_URI } = process.env;

const port = PORT || 4000;

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false,  useUnifiedTopology: true  })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.error(e);
    });

/* =======================
    ref 설정
==========================*/
const commentSchema = mongoose.Schema(
    {
        writer : {
            type : Schema.Types.ObjectId,
            ref : 'users',
        },
      

    },
    {timestamps : true} /* CreateDate가 표시 됨 */,
);

const Comment = mongoose.model('comment',commentSchema);

module.exports = {Comment};



/* =======================
    EXPRESS CONFIGURATION
==========================*/
const app = express();

/* =======================
       ROUTE SETTING
==========================*/
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            Secure: true,
        },
    }),
);

app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.get('/SignUp', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.get('/Account', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});
app.get('/Transfer/:id', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.use('/api', api);

app.use(jwtMiddleware);

/* =======================
        SERVER OPEN
==========================*/
app.listen(port, () => {
    console.log('Listening to port %d', port);
});
