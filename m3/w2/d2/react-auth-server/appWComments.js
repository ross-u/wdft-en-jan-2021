const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/auth.router');


// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.error(err));


// EXPRESS SERVER INSTANCE
const app = express();
//      ║
//      ║
//      ║  
//      ⇊   CORS MIDDLEWARE
app.use(
  cors({
    credentials: true,
    origin: [process.env.PUBLIC_DOMAIN],
  }));
//      ║                 ⇈
//      ║                 ║
//      ║                 ╚═══════════════════════════════════════╗
//      ║     SESSION                                             ║
//      ║    MIDDLEWARE                                           ║
//      ║                                                         ║
//      ║   Checks if cookie with session id exists on the        ║
//      ║   HTTP request and if it does it verifies               ║
//      ║   it, and gets the user data from                       ║
//      ║   the sessions storage and assigns                      ║
//      ║   it to `req.session.currentUser`                       ║
//      ║                                                         ║
//      ⇊      🍪.sessionId   ❓                                   ║
app.use(                      //                                  ║   ⬆ 🍪
  session({                   //                                  ║   
    store: new MongoStore({   //                                  ║
      mongooseConnection: mongoose.connection,  //    SESSION MIDDLEWARE checks if `req.session.currentUser` was set.
      ttl: 30 * 24 * 60 * 60,  // 30 days             If `req.session.currentUser` was set, middleware creates a cookie 🍪  
    }),                    //                         with the session id, and sends it in the HTTP response headers
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000, },
  }),
);//    ║                 ⇈ 
//      ║                 ║
//      ║                 ║
//      ║                 ║
//      ║   MIDDLEWARE    ║
//      ⇊                 ║
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//      ║                           ⇈
//      ║                           ║
//      ║                           ║       
//      ║                           ║
//      ║                           ║
//      ║                           ║
//      ║  ROUTER MIDDLEWARE        ║   res.send()  ||  res.json()
//      ⇊                           ║
app.use('/auth', authRouter);// ════╣   ⬙ or  
//                                  ║
//                                  ║  next(Error)
//                                  ║
//          ERROR HANDLING          ║
//                                  ⇊
// Catch 404 and respond with error message
app.use((req, res, next) => {
  res.status(404).json({ code: 'not found' });
});

// Catch next(err) calls
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    const statusError = err.status || '500';
    res.status(statusError).json(err);
  }
});


module.exports = app;
