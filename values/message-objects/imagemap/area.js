'use strict';

module.exports = class {
    constructor(x, y, width, height) {
        Object.assign(this, {
            x,
            y,
            width,
            height
        });
    }
};
