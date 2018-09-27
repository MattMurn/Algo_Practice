const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const request = new XMLHttpRequest();
request.open('GET', 'http://quotes.rest/qod.json', true);
request.onload = function() {
    console.log("request loading...")
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400){
        console.log(data);
    }
}

request.send();