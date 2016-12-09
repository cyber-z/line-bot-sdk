'use strict';

module.exports = class {
    static get Client() {
        if (!this._lineClient) this._lineClient = require('./client');
        return this._lineClient;
    }

    static get EventsParser() {
        if (!this._EventsParser) this._EventsParser = require('./events-parser');
        return this._EventsParser;
    }

    // Enums
    static get EventType() {
        if (!this._EventType) this._EventType = require('./enums/event-type');
        return this._EventType;
    }

    static get MessageType() {
        if (!this._MessageType) this._MessageType = require('./enums/message-type');
        return this._MessageType;
    }

    static get SourceType() {
        if (!this._SourceType) this._SourceType = require('./enums/source-type');
        return this._SourceType;
    }

    // Values
    static get TextMessage() {
        if (!this._TextMessage) this._TextMessage = require('./values/message-objects/text');
        return this._TextMessage;
    }

    static get Image() {
        if (!this._Image) this._Image = require('./values/message-objects/image');
        return this._Image;
    }

    static get Video() {
        if (!this._Video) this._Video = require('./values/message-objects/video');
        return this._Video;
    }

    static get Audio() {
        if (!this._Audio) this._Audio = require('./values/message-objects/audio');
        return this._Audio;
    }

    static get Location() {
        if (!this._Location) this._Location = require('./values/message-objects/location');
        return this._Location;
    }

    static get Sticker() {
        if (!this._Sticker) this._Sticker = require('./values/message-objects/sticker');
        return this._Sticker;
    }

    static get Template() {
        if (!this._Template) this._Template = require('./values/message-objects/template');
        return this._Template;
    }

    static get Imagemap() {
        if (!this._Imagemap) this._Imagemap = require('./values/message-objects/imagemap');
        return this._Imagemap;
    }
}
