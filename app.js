const createError  = require('http-errors');
const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');

const adminRoutes  = require('./routes/admin.routes.js');
const apiAdminRoutes  = require('./routes/api.admin.routes.js');
const apiClientRoutes  = require('./routes/api.client.routes.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', adminRoutes);
app.use('/api/admin', apiAdminRoutes);
app.use('/api/client', apiClientRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.render('pages/error.pages.ejs', {
    title : "error - "+err.status || 500,
    errorCode : err.status || 500,
    errorText : err.message
  });
});

module.exports = app;
