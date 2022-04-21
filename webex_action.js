const axios = require('axios');
const core = require('@actions/core');
const github = require('@actions/github');

var ROOMID = process.env.ROOMID;
var BEARER_TOKEN = 'Bearer ' + process.env.TOKEN;
var MARKDOWN = process.env.MESSAGE;

var data = JSON.stringify({
  "roomId": ROOMID,
  "markdown": MARKDOWN,
});

var config = {
  method: 'post',
  url: 'https://webexapis.com/v1/messages',
  headers: { 
    'Authorization': BEARER_TOKEN, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
