const express = require('express');
const siteRouter = express.Router();

const { isLoggedIn, isFede } = require('./../utils/middleware')


siteRouter.get('/secret', isLoggedIn, (req, res, next) => {
  res.render('secret');
})

siteRouter.get('/admin-panel', isLoggedIn, isFede, (req, res, next) => {
  res.render('admin-view');
})


module.exports = siteRouter;