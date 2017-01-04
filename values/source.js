'use strict';

module.exports = class {
    constructor(type, id) {
        Object.assign(this, {
            type,
            id
        });
    }
};
