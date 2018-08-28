const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
// const mysql = require('mysql2');
const app = express();
const PORT = 3001;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// /it-recruitment.mintel.com/testing/test_data.json
app.use(express.static("public"));
const json = "http://it-recruitment.mintel.com/testing/test_data.json"
getData = json => {
    console.log("hello")
    app.get(`/${json}`, (req, res) => {
      console.log(res.serverRespose)
    })
}
getData(json)


app.listen(PORT, ()=> {
    console.log(`app is listening on port ${PORT}`);
});