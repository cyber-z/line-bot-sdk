'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(label, data, text) {
        super();
        Object.assign(this, {
            type: this._ActionType.POSTBACK,
            label,
            data,
            text
        });
    }
};
