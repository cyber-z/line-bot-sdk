'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(title, address, latitude, longitude) {
        super();
        Object.assign(this, {
            type: this._MessageType.LOCATION,
            title,
            address,
            latitude,
            longitude
        });
    }
};
