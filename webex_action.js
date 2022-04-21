const axios = require('axios');
const core = require('@actions/core');
const github = require('@actions/github');

var ROOMID = core.getInput('ROOMID');
var TOKEN = core.getInput('TOKEN');
var MESSAGE = core.getInput('MESSAGE');

var BODY = 'roomId=' + ROOMID + 'markdown=' + MESSAGE;

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
