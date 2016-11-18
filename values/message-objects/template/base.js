'use strict';

const Base = require('./../base.js');
module.exports = class extends Base {
    constructor(altText) {
        super();
        Object.assign(this, {
            type: this._MessageType.TEMPLATE,
            altText: altText ? altText : 'このメッセージを表示するにはLINEをアップデートしてください',
            _TemplateType: require('../../../enums/template-type')
        });
    }
}
