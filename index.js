const express = require('express')
const app = require("./app")
const port = process.env.PORT || 3000
const axios = require('axios')
const cors = require('cors');
const corsOptions = {exposedHeaders: ['Authorization', 'X-My-Custom-Header'],};
app.use(cors(corsOptions));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const myFunction = require('./routes/index');
// app.get('/post', (req, res) => res.send(postatlocation("guza")))




const headers = {
  'Access-Control-Allow-Origin': '*',
  'content-type': 'text/html',
  'cookie' : '_ga=GA1.2.1727065278.1683327436; _gid=GA1.2.1323657815.1683327436; trc_cookie_storage=taboola%2520global%253Auser-id%3Dbe0b07af-f123-4363-812c-3bc3d717703d-tuctb4f0f4c; _fa-screen=%7B%22w%22%3A1318%2C%22h%22%3A961%7D; cto_bundle=7QvVAl9sWFR0MVZoM0kxSGFpZyUyQnJzJTJGOVk0cTYlMkZjalFEMjJlNldhdUFpdjRwNUZKOTZoYW5QMXZxRTF6aDZOVjhmOUhNNFhheU1tSnd3SHpZWjJBZSUyRmdRSGJVZ2hmaVdpWW9KbFhIZ1QwYUdJUmdIckFpTVNkU3ZGSUo2RTFXOFJMRDBESVZUOEFZSGV2cTkzaUl4d21MNlNEY1MzbEs2M1d6Unh3TDF4a0FUeW9CcyUzRA; fa_www_ninjaworldrpg_com_t=a%3A3%3A%7Bi%3A55%3Bi%3A1683378324%3Bi%3A328%3Bi%3A1683378033%3Bi%3A335%3Bi%3A1683373641%3B%7D; fa_www_ninjaworldrpg_com_data=a%3A3%3A%7Bs%3A11%3A%22autologinid%22%3Bs%3A64%3A%22a1919eeeeb0b26f583e10dfa6b65751d0571387ia1919eec82a289c14dbc0021%22%3Bs%3A6%3A%22userid%22%3Bs%3A1%3A%222%22%3Bs%3A5%3A%22posts%22%3Ba%3A2%3A%7Bs%3A6%3A%22number%22%3Bi%3A0%3Bs%3A4%3A%22last%22%3Bi%3A0%3B%7D%7D',
  'user-agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
};

axios.post('https://www.ninjaworldrpg.com/login', {
    username: 'Game Master',
    password: 'admin123',
    autologin: 'on',
    login: 'Log in'
    
}, {
  headers: headers,
 // maxRedirects: 0
})
.then((response) => {

})
.catch((error) => {
    console.error(error);
});
