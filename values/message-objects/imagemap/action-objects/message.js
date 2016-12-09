'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(text, area) {
        super();
        Object.assign(this, {
            type: this._ActionType.MESSAGE,
            text,
            area
        });
    }
};
