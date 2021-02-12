var express = require("express");
var siteRouter = express.Router();



siteRouter.get('/countries-example', (req, res, next) => {
  res.render('countries-list');
});


siteRouter.get('/graphs-example', (req, res, next) => {
  res.render('financial-data');
})


siteRouter.get('/currencies-example', (req, res, next) => {
  res.render('currencies-view');
})






module.exports = siteRouter;