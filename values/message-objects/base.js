'use strict';

module.exports = class {
    get _MessageType() {
        if (!this.__MessageType)
            this.__MessageType = require('../../enums/message-type');
        return this.__MessageType;
    }
}
