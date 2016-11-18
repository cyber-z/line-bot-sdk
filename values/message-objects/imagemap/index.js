const Base = require('./../base.js');
module.exports = class extends Base {
    constructor(baseUrl, altText, baseSizeWidth, baseSizeHeight, actions) {
        super();
        Object.assign(this, {
            type: this._MessageType.IMAGE,
            baseUrl,
            altText,
            baseSize: {
              width: baseSizeWidth,
              height: baseSizeHeight
            },
            actions
        });
    }
}
