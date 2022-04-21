const axios = require('axios');
const core = require('@actions/core');
const github = require('@actions/github');

var ROOMID = process.env.ROOMID;
var TOKEN = process.env.TOKEN;
var MESSAGE = process.env.MESSAGE;

var BODY = 'roomId=' + ROOMID + 'markdown=' + MESSAGE;
console.log(BODY)

axios
  .post('https://webexapis.com/v1/messages/', {
    roomId: ROOMID,
    markdown: MESSAGE
  }, {
      headers: { 
          Authorization: TOKEN
      }
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
