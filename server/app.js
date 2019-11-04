require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const session = require("express-session")

const logger       = require('morgan');
const path         = require('path');
const cors = require('cors')

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
mongoose
  .connect('mongodb://localhost/blob', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  app.use(
    session({
      key: "user_sid",
      secret: "basic-arsedtfzguhijokuth-secret",
      resave: true,
      saveUninitialized: true, // option when youre setting up the cookie for the session for the first time, whether it will automatically save or not
    })
  )

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));




app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
);

app.use('/api/auth', require("./routes/auth"));
app.use('/api/product', require("./routes/product"));
app.use('/api/rent', require("./routes/rent"))

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
