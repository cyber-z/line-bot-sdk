'use strict';

const Base = require('./../base.js');
module.exports = class extends Base {
    constructor(baseUrl, altText, baseSizeWidth, baseSizeHeight, actions) {
        super();
        Object.assign(this, {
            type: this._MessageType.IMAGEMAP,
            baseUrl,
            altText,
            baseSize: {
                width: baseSizeWidth,
                height: baseSizeHeight
            },
            actions
        });
    }

    static get Area() {
        if (!this._Area) this._Area = require('./area');
        return this._Area;
    }

    static get Action() {
        if (!this._Action) this._Action = require('./action-objects');
        return this._Action;
    }
};
