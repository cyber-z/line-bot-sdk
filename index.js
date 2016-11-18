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

    static get Template() {
      if (!this._Template) this._Template = require('./values/message-objects/template');
      return this._Template;
    }
}
