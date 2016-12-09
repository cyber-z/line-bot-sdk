'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(buttonsContent, altText) {
        super(altText);
        this.template = {
            type: this._TemplateType.BUTTONS
        }
        Object.assign(this.template, buttonsContent);
    }
};
