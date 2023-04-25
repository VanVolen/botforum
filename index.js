const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const axios = require('axios');




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


const headers = {
  'Access-Control-Allow-Origin': '*',
  'content-type': 'text/html'
};

// Check if uid is provided in query parameter
if (process.argv[2]) {
  const uid = process.argv[2];

  // Define function to make POST request
  async function makePost(loginUrl, postData, tr) {
    try {
      const response = await axios.post(loginUrl, postData, {
        headers: headers
      });

      if (tr === 1) {
        return response.request.res.responseUrl;
      } else {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Make initial POST request
  makePost('https://ninjaworldrpg.forumotion.me/login', 'username=Game Master&password=admin123&autologin=1&redirect=https://ninjaworldrpg.forumotion.me/&query=&login=Log in')
    .then(postResult => {
      // Make second POST request
      return makePost('https://ninjaworldrpg.forumotion.me/rpg_sheet_edit?u=' + uid, null);
    })
    .then(result => {
      // Print result of second POST request
      console.log(result);
    });
} else {
  console.error('uid not provided');
}
