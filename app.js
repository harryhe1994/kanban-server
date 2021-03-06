var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require('./config/config');
const envConfig = require('./config/config_development');

const mon = require('./app/utils/dbUtil');
mon.connectMongoDB();
mon.createModel();

var router = express.Router();

var app = express();

process.env.PORT = envConfig.kanban.port;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//cross-domain access
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,X-Powered-By,Content-Type");
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});
app.use(express.static(path.join(__dirname, 'public')));

// Globbing express routing files
// all route infos are added here.
config.getGlobbedFiles('./routes/**/*.js').forEach(function(routePath) {
    require(path.resolve(routePath))(router);
});

app.use(envConfig.kanban.context, router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
