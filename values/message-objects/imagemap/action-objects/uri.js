const Base = require('./base.js');
module.exports = class extends Base {
    constructor(linkUrl, area) {
        super();
        Object.assign(this, {
            type: this._ActionType.URI,
            linkUrl,
            area
        });
    }
}
