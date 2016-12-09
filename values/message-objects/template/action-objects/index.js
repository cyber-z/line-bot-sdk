'use strict';

module.exports = class {
    static get Message() {
        if (!this._Message) this._Message = require('./message');
        return this._Message;
    }

    static get Postback() {
        if (!this._Postback) this._Postback = require('./postback');
        return this._Postback;
    }

    static get URI() {
        if (!this._URI) this._URI = require('./uri');
        return this._URI;
    }
};
