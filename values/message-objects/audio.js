const Base = require('./base.js');
module.exports = class extends Base {
    constructor(originalContentUrl, duration) {
        super();
        Object.assign(this, {
            type: this._MessageType.AUDIO,
            originalContentUrl,
            duration
        });
    }
}
