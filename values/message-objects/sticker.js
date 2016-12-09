'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(packageId, stickerId) {
        super();
        Object.assign(this, {
            type: this._MessageType.STICKER,
            packageId,
            stickerId
        });
    }
};
