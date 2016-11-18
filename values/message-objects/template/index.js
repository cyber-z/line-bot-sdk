'use strict';

module.exports = class {
    static get Buttons() {
        if (!this._Buttons) this._Buttons = require('./buttons');
        return this._Buttons;
    }

    static get Confirm() {
        if (!this._Confirm) this._Confirm = require('./confirm');
        return this._Confirm;
    }

    static get Carousel() {
        if (!this._Carousel) this._Carousel = require('./carousel');
        return this._Carousel;
    }

    static get ButtonsContent() {
        if (!this._ButtonsContent) this._ButtonsContent = require('./buttons-content');
        return this._ButtonsContent;
    }

    static get Action() {
        if (!this._Action) this._Action = require('./action-objects');
        return this._Action;
    }
}
