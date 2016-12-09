'use strict';

module.exports = class {
    constructor(thumbnailImageUrl, title, text, actions) {
        Object.assign(this, {
            thumbnailImageUrl,
            title,
            text,
            actions
        });
    }
};
