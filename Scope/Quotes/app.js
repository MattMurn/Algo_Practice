const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);
// app.get('http://quotes.rest/qod.json', (req, res) => {
//     console.log(res);
// })
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})
app.listen(PORT, ()=> console.log(`app is listen on port: ${PORT}`))
