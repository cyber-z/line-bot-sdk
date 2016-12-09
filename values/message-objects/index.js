'use strict';

module.exports = class {
    static get Text() {
        if (!this._Text) this._Text = require('./text');
        return this._Text;
    }

    static get Image() {
        if (!this._Image) this._Image = require('./image');
        return this._Image;
    }

    static get Video() {
        if (!this._Video) this._Video = require('./video');
        return this._Video;
    }

    static get Audio() {
        if (!this._Audio) this._Audio = require('./audio');
        return this._Audio;
    }

    static get Location() {
        if (!this._Location) this._Location = require('./location');
        return this._Location;
    }

    static get Sticker() {
        if (!this._Sticker) this._Sticker = require('./sticker');
        return this._Sticker;
    }

    static get Imagemap() {
        if (!this._Imagemap) this._Imagemap = require('./imagemap');
        return this._Imagemap;
    }

    static get Template() {
        if (!this._Template) this._Template = require('./template');
        return this._Template;
    }
};
