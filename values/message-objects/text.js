'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(text) {
        super();
        this.type = this._MessageType.TEXT;
        this.text = text;
    }
};
