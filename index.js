const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const axios = require('axios');

console.log("test index js");



var LoremIpsum = require('lorem-ipsum').LoremIpsum;

var lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 15,
    min: 3
  }
});

app.get('/', (req, res) => res.send(lorem.generateParagraphs(7)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


axios.post('https://ninjaworldrpg.forumotion.me/login', {
    username: 'Game Master',
    password: 'admin123',
    autologin: 'on',
    login: 'Log in'
})
.then((response) => {
    console.log('Bot se uspesno ulogovao xD');
})
.catch((error) => {
    console.error(error);
});
