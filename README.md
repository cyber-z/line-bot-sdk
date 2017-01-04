# LINE bot SDK

SDK of the LINE Messaging API for `Node.js`.

This is *not official* one.

## About the LINE Messaging API

See the official API reference documentation for more information.

https://devdocs.line.me/

## Usage

### Push

```js
const SDK = require('line-bot-sdk');
const Client = SDK.Client;

const to = someSourceID;
const messages = [
  new SDK.TextMessage('Push message using line-bot-sdk.')
];

const client = new Client(process.env.LINE_ACCESS_TOKEN);
client.push(to, messages).then(res => {
  // Something as callback
});
```

### Reply

```js
const SDK = require('line-bot-sdk');
const EventsParser = SDK.EventsParser;
const Client = SDK.Client;

const client = new Client(process.env.LINE_ACCESS_TOKEN);
const events = EventsParser.parse(req.body.events);

events.forEach(event => {
  const messages = [
    new SDK.TextMessage('Reply message using line-bot-sdk.')
  ];

  client.reply(event.replyToken, messages);
});
```
