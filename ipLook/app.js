const axios = require('axios');
const moment = require('moment')
let hits = [];

const getIp = () => {
    axios.get('http://getcitydetails.geobytes.com/GetCityDetails?fqcn=')
    .then(data => {
        console.log(data.data);
        let ip = data.data.geobytesipaddress
    
    axios.get(`http://api.ipstack.com/${ip}?access_key=e3af7c52287a4cc971a2caa31e54fb6b`)
    .then(data => {
        // console.log(data.data);
        let i = data.data;
        let userIp = {
            ip: i.ip,
            country_name: i.country_name,
            region_name: i.region_name,
            city: i.city,
            zip: i.zip,
            lat: i.latitude,
            long: i.longitude,
            time: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
        hits.push(userIp);
        // (hits.indexOf(ip) !== -1) ? null : hits.push(userIp);
        console.log(hits);
    })
    })
};

setInterval(getIp, 100000);
getIp();


// $.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
//   console.log(JSON.stringify(data, null, 2));
// });