'use strict';

const Base = require('./base.js');
module.exports = class extends Base {
    constructor(buttonsContents, altText) {
        super(altText);
        this.template = {
            type: this._TemplateType.CAROUSEL,
            columns: buttonsContents
        }
    }
}
