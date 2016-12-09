'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(originalContentUrl, previewImageUrl) {
        super();
        Object.assign(this, {
            type: this._MessageType.VIDEO,
            originalContentUrl,
            previewImageUrl
        });
    }
};
