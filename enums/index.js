'use strict';

module.exports = class {
    static get EventType() {
        this._EventType = this._EventType || require('./event-type');
        return this._EventType;
    }

    static get MessageType() {
        this._MessageType = this._MessageType || require('./message-type');
        return this._MessageType;
    }

    static get TemplateType() {
        this._TemplateType = this._TemplateType || require('./template-type');
        return this._TemplateType;
    }

    static get TemplateActionType() {
        this._TemplateActionType = this._TemplateActionType || require('./template-action-type');
        return this._TemplateActionType;
    }

    static get ImagemapActionType() {
        this._ImagemapActionType = this._ImagemapActionType || require('./imagemap-action-type');
        return this._ImagemapActionType;
    }

    static get SourceType() {
        this._SourceType = this._SourceType || require('./source-type');
        return this._SourceType;
    }
};
