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
    static get _Enum() {
        this.__Enum = this.__Enum || require('./enums/');
        return this.__Enum;
    }

    static get EventType() {
        return this._Enum.EventType;
    }

    static get MessageType() {
        return this._Enum.MessageType;
    }

    static get SourceType() {
        return this._Enum.SourceType;
    }

    static get TemplateType() {
        return this._Enum.TemplateType;
    }

    static get TemplateActionType() {
        return this._Enum.TemplateActionType;
    }

    static get ImagemapActionType() {
        return this._Enum.ImagemapActionType;
    }

    // MessageObjects
    static get _MessageObject() {
        this.__MessageObject = this.__MessageObject || require('./values/message-objects/');
        return this.__MessageObject;
    }

    static get TextMessage() {
        return this._MessageObject.Text;
    }

    static get Image() {
        return this._MessageObject.Image;
    }

    static get Video() {
        return this._MessageObject.Video;
    }

    static get Audio() {
        return this._MessageObject.Audio;
    }

    static get Location() {
        return this._MessageObject.Location;
    }

    static get Sticker() {
        return this._MessageObject.Sticker;
    }

    static get Template() {
        return this._MessageObject.Template;
    }

    static get Imagemap() {
        return this._MessageObject.Imagemap;
    }
}
