'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(linkUrl, area) {
        if (!linkUrl) throw new Error('linkUrl is required');
        if (!area) throw new Error('area is required');

        super();
        Object.assign(this, {
            type: this._ActionType.URI,
            linkUrl,
            area
        });
    }
};
