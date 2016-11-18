'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(text, actions, altText) {
        super(altText);
        this.template = {
            type: this._TemplateType.CONFIRM,
            text: text,
            actions: actions
        }
    }
}
