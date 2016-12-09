'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(label, uri) {
        super();
        Object.assign(this, {
            type: this._ActionType.URI,
            label,
            uri
        });
    }
};
