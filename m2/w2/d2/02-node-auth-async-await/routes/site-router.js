const express = require('express');
const siteRouter = express.Router();

const { isLoggedIn } = require('./../utils/middleware')


siteRouter.get('/secret', isLoggedIn, (req, res, next) => {
  res.render('secret');
})

module.exports = siteRouter;