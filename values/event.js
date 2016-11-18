module.exports = class {
    constructor(type, source, timestamp) {
        Object.assign(this, {
            type,
            source,
            timestamp
        });
    }

    set replyToken(token) {
        this._replyToken = token;
    }

    get replyToken() {
        return this._replyToken;
    }

    set message(messageObject) {
        this._message = messageObject;
    }

    get message() {
        return this._message;
    }
}
