'use strict';

module.exports = class {
    static get Area() {
        if (!this._Area) this._Area = require('./area');
        return this._Area;
    }

    static get Action() {
        if (!this._Action) this._Action = require('./action-objects');
        return this._Action;
    }
};
