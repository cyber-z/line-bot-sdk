'use strict';

module.exports = class {
    constructor(accessToken) {
        this._APIHost = 'https://api.line.me/';
        this._accessToken = accessToken;
        this._HTTPClient = require('superagent');
    }

    reply(replyToken, messages) {
        const body = {
            replyToken,
            messages
        };
        return this._post('/v2/bot/message/reply', body);
    }

    push(to, messages) {
        const body = {
            to,
            messages
        };
        return this._post('/v2/bot/message/push', body);
    }

    getProfile(userID) {
        return this._get(`/v2/bot/profile/${userID}`);
    }

    _post(path, body) {
        return new Promise((resolve, reject) => {
            this._HTTPClient.post(this._APIHost + path)
                .set('Content-Type', 'application/json; charser=UTF-8')
                .set('Authorization', `Bearer ${this._accessToken}`)
                .send(body)
                .end((err, res) => err ? reject(err) : resolve(res));
        });
    }

    _get(path, query) {
        return new Promise((resolve, reject) => {
            this._HTTPClient.get(this._APIHost + path)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${this._accessToken}`)
                .query(query)
                .end((err, res) => err ? reject(err) : resolve(res));
        });
    }
};
