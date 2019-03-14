const path = require('path');
const express = require('express');
const request = require("request");
const mustache = require("mustache");
const mustacheExpress = require("mustache-express");
const dataStream = require('../data/data_array');
require('dotenv').config()

module.exports = (app) => {
  app.use('/', express.static('public'));
  app.use('/images', express.static('public/static/images'));
  app.use('/css', express.static('public/static/css'));
  app.use('/js', express.static('public/static/js'));
  app.engine('mustache', mustacheExpress());

  app.set('view engine', 'mustache');
  app.set('views',path.join(__dirname, '../public/html/pages'));
  

  app.get('/', (req, res) => {
    res.render("home")
  });
  // app.get('/problem-one', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../public/html/dist/problem-one.html'));
  // });
  app.get('/problem-one', (req, res) => {
    res.render("problem-one", {restData: JSON.stringify(dataStream)})
  });
  app.get('/problem-two', (req, res) => {
    res.render("problem-two", {trades: JSON.stringify(dataStream)})
  
  app.get('/problem-three', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/dist/problem-three.html'));
  });

  app.get('/test-data', (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(dataStream));
  });
};

const tradeFunc = ({symbol, price, shares, action}, currPrice) => {
  let borderStyle = "";
  let tradeStyle = "";
  let netStyle = "";
  let netPnL = 0;
  let tradePnL = (() => {
      if(action === 'BUY'){
          return (currPrice - price) * shares;
      }
      else if(action === "SELL"){
          return (price - currPrice) * shares;
      }
  })();
  let setStyle = ((pnl,style) => {
      if(pnl < 0){
          borderStyle = "loss-border";
          style = "loss";
      }
      else if(pnl > 0){
          borderStyle = "profit-border"
          style = "profit";
      }
  })(tradePnL, tradeStyle);

  return {
      tradePnL: tradePnL,
      borderStyle: borderStyle,
      tradeStyle: tradeStyle,
      
  }
}