var express = require('express');
var router = express.Router();
var axios = require("axios")

router.get('/post', (req, res) => {
  postatlocation("test")
  res.render('index', { title: 'Home' });
});

const headerspost = {
  'Access-Control-Allow-Origin': '*',
  'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'cookie' : '_ga=GA1.2.1727065278.1683327436; _gid=GA1.2.1323657815.1683327436; trc_cookie_storage=taboola%2520global%253Auser-id%3Dbe0b07af-f123-4363-812c-3bc3d717703d-tuctb4f0f4c; _fa-screen=%7B%22w%22%3A1318%2C%22h%22%3A961%7D; cto_bundle=7QvVAl9sWFR0MVZoM0kxSGFpZyUyQnJzJTJGOVk0cTYlMkZjalFEMjJlNldhdUFpdjRwNUZKOTZoYW5QMXZxRTF6aDZOVjhmOUhNNFhheU1tSnd3SHpZWjJBZSUyRmdRSGJVZ2hmaVdpWW9KbFhIZ1QwYUdJUmdIckFpTVNkU3ZGSUo2RTFXOFJMRDBESVZUOEFZSGV2cTkzaUl4d21MNlNEY1MzbEs2M1d6Unh3TDF4a0FUeW9CcyUzRA; fa_www_ninjaworldrpg_com_t=a%3A3%3A%7Bi%3A55%3Bi%3A1683378324%3Bi%3A328%3Bi%3A1683378033%3Bi%3A335%3Bi%3A1683373641%3B%7D; fa_www_ninjaworldrpg_com_data=a%3A3%3A%7Bs%3A11%3A%22autologinid%22%3Bs%3A64%3A%22a1919eeeeb0b26f583e10dfa6b65751d0571387ia1919eec82a289c14dbc0021%22%3Bs%3A6%3A%22userid%22%3Bs%3A1%3A%222%22%3Bs%3A5%3A%22posts%22%3Ba%3A2%3A%7Bs%3A6%3A%22number%22%3Bi%3A0%3Bs%3A4%3A%22last%22%3Bi%3A0%3B%7D%7D',
  'user-agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
};

function postatlocation (data) {
  axios.post('https://www.ninjaworldrpg.com/post', {
    mode: "reply",
      message: data,
      notify: 0,
      t: 335,
      post: 'Send',
  }, {
    headers: headerspost,
  })
    .then(response => {
      console.log(response); 

    })
    .catch(error => {
      console.error(error);
    });
}


module.exports = router;
