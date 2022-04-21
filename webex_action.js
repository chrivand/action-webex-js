import fetch from "node-fetch";

const core = require('@actions/core');
const github = require('@actions/github');

try {

    var ROOMID = core.getInput('ROOMID');
    var TOKEN = core.getInput('TOKEN');
    var MESSAGE = core.getInput('MESSAGE');

    var BODY = 'roomId=' + ROOMID + 'markdown=' + MESSAGE;

    fetch('https://webexapis.com/v1/messages/', {
        method: 'POST',
        headers: {
            'Authorization': TOKEN,
        },
        body: BODY
    });
} catch (error) {
    core.setFailed(error.message);
}
