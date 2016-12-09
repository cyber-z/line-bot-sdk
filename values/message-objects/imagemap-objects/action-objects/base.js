module.exports = class {
    get _ActionType() {
        if (!this.__ActionType)
            this.__ActionType = require('../../../enums/imagemap-action-type');
        return this.__ActionType;
    }
};
