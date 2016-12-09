'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(label, text) {
        super();
        this.type = this._ActionType.MESSAGE;
        this.label = label;
        this.text = text;
    }
};
