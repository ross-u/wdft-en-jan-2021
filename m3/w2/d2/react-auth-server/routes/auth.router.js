const express = require("express");
const router = express.Router();

const createError = require("http-errors");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const User = require("../models/user.model");



// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validateAuthData } = require("../helpers/middlewares");



// POST '/auth/signup'
router.post('/signup', isNotLoggedIn, validateAuthData, async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user) { 
      return next(createError(400)); // Bad Request
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = await User.create({ username, password: hashPass });

    newUser.password = "*";

    req.session.currentUser = newUser; // triggers the creation of session and the cookie with session id

    res
      .status(201) // Created
      .json(newUser);


  } catch (error) {
    next( createError(error) );  // Internal Server Error (by default)
  }
})




// POST '/auth/login'
router.post('/login', isNotLoggedIn, validateAuthData, async (req, res, next) => {
  try {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username });
    if (!user) return next(createError(404));  // Bad Request

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (passwordCorrect) {
      user.password = '*';
      req.session.currentUser = user;

      res.status(200).json(user);
    }
    else {
      next(createError(401)); // Unauthorized
    }

  } catch (error) {
    next( createError(error) ); // 500 Internal Server Error (by default)
  }
})


// GET '/auth/logout'
router.get('/logout', isLoggedIn, (req, res, next) => {
  req.session.destroy(function (err) {
    if (err) next(createError(err));
    else {
      res
        .status(204) // No Content
        .send();
    }


  })
})


// GET '/auth/me'
router.get('/me', isLoggedIn, (req, res, next) => {
  const currentUserData = req.session.currentUser;

  res.status(200).json(currentUserData);
})

module.exports = router;
