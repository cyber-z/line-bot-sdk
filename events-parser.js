'use strict';

module.exports = class {
    static get _Enum() {
        this.__Enum = this.__Enum || require('./enums');
        return this.__Enum;
    }

    static get _MessageObject() {
        this.__MessageObject = this.__MessageObject || require('./values/message-objects');
        return this.__MessageObject;
    }

    static get _Event() {
        this.__Event = this.__Event || require('./values/event');
        return this.__Event;
    }

    static get _Source() {
        this.__Source = this.__Source || require('./values/source');
        return this.__Source;
    }

    static get _Postback() {
        this.__Postback = this.__Postback || require('./values/postback');
        return this.__Postback;
    }

    static parse(eventsJSON) {
        return eventsJSON.map(event => this._parseEvent(event));
    }

    static _parseEvent(eventJSON) {
        const EventType = this._Enum.EventType;
        const event = new this._Event(
            this._parseEventType(eventJSON.type),
            this._parseSource(eventJSON.source),
            eventJSON.timestamp);

        if (event.type !== EventType.UNFOLLOW && event.type !== EventType.LEAVE)
            event.replyToken = eventJSON.replyToken;

        switch (event.type) {
            case EventType.MESSAGE:
                event.message = this._parseMessage(eventJSON.message);
                break;
            case EventType.POSTBACK:
                event.postback = this._parsePostback(eventJSON.postback);
                break;
        }

        return event;
    }

    static _parseEventType(typeString) {
        if (!typeString) throw new Error('Argument is required');

        const EventType = this._Enum.EventType;
        switch (typeString) {
            case 'message':
                return EventType.MESSAGE;
            case 'follow':
                return EventType.FOLLOW;
            case 'unfollow':
                return EventType.UNFOLLOW;
            case 'join':
                return EventType.JOIN;
            case 'leave':
                return EventType.LEAVE;
            case 'postback':
                return EventType.POSTBACK;
            case 'beacon':
                return EventType.BEACON;
            default:
                throw new Error(`${typeString} is not supported`);
        }
    }

    static _parseMessage(messageJSON) {
        const MessageType = this._Enum.MessageType;
        const messageType = this._parseMessageType(messageJSON.type);
        switch (messageType) {
            case MessageType.TEXT:
                return new this._MessageObject.Text(messageJSON.text);
            default:
                throw new Error(`${messageType} is not supported`);
        }
    }

    static _parseMessageType(typeString) {
        if (!typeString) throw new Error('Argument is required');

        const MessageType = this._Enum.MessageType;
        switch (typeString) {
            case 'text':
                return MessageType.TEXT;
            case 'image':
                return MessageType.IMAGE;
            case 'video':
                return MessageType.VIDEO;
            case 'audio':
                return MessageType.AUDIO;
            case 'location':
                return MessageType.LOCATION;
            case 'sticker':
                return MessageType.STICKER;
            case 'imagemap':
                return MessageType.IMAGEMAP;
            case 'template':
                return MessageType.TEMPLATE;
            default:
                throw new Error(`${typeString} is not supported`);
        }
    }

    static _parsePostback(postbackJSON) {
        return new this._Postback(postbackJSON.data);
    }

    static _parseSource(sourceJSON) {
        const SourceType = this._Enum.SourceType;
        const type = this._parseSourceType(sourceJSON.type);

        let id;
        if (type === SourceType.USER) id = sourceJSON.userId;
        if (type === SourceType.GROUP) id = sourceJSON.groupId;

        return new this._Source(type, id);
    }

    static _parseSourceType(typeString) {
        if (!typeString) throw new Error('Argument is required');

        const SourceType = this._Enum.SourceType;
        switch (typeString) {
            case 'user':
                return SourceType.USER;
            case 'group':
                return SourceType.GROUP;
            default:
                throw new Error(`${typeString} is not supported`);
        }
    }
};
