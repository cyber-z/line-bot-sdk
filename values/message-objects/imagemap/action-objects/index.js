'use strict';

module.exports = class {
    static get Message() {
        this._Message = this._Message || require('./message');
        return this._Message;
    }

    static get URI() {
        this._URI = this._URI || require('./uri');
        return this._URI;
    }
};
