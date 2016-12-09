'use strict';

module.exports = class {
    static get Message() {
        if (!this._Message) this._Message = require('./message');
        return this._Message;
    }

    static get URI() {
        if (!this._URI) this._URI = require('./uri');
        return this._URI;
    }
};
