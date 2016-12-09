describe('EventsParser', () => {
    const SDK = require('../');
    const EventsParser = SDK.EventsParser;

    describe('._parseEventType(typeString)', () => {
        const EventType = SDK.EventType;

        describe("on typeString is 'message'", () => {
            it('returns EventType.MESSAGE', () => {
                EventsParser._parseEventType('message').should.equal(EventType.MESSAGE);
            });
        });

        describe("on typeString is 'follow'", () => {
            it('returns EventType.FOLLOW', () => {
                EventsParser._parseEventType('follow').should.equal(EventType.FOLLOW);
            });
        });

        describe("on typeString is 'unfollow'", () => {
            it('returns EventType.UNFOLLOW', () => {
                EventsParser._parseEventType('unfollow').should.equal(EventType.UNFOLLOW);
            });
        });

        describe("on typeString is 'join'", () => {
            it('returns EventType.JOIN', () => {
                EventsParser._parseEventType('join').should.equal(EventType.JOIN);
            });
        });

        describe("on typeString is 'leave'", () => {
            it('returns EventType.LEAVE', () => {
                EventsParser._parseEventType('leave').should.equal(EventType.LEAVE);
            });
        });

        describe("on typeString is 'postback'", () => {
            it('returns EventType.POSTBACK', () => {
                EventsParser._parseEventType('postback').should.equal(EventType.POSTBACK);
            });
        });

        describe("on typeString is 'beacon'", () => {
            it('returns EventType.BEACON', () => {
                EventsParser._parseEventType('beacon').should.equal(EventType.BEACON);
            });
        });

        describe('on typeString is unsupported one', () => {
            it('throws when the argument is present', () => {
                (() => EventsParser._parseEventType('hoge')).should.throw('hoge is not supported');
            });

            it('throws when the argument is not present', () => {
                (() => EventsParser._parseEventType()).should.throw('Argument is required');
            });
        });
    });

    describe('._parseMessage(messageJSON)', () => {
        const MessageType = SDK.MessageType;
        const messageJSON = {
            id: '325708'
        }

        describe("on messageJSON.type is 'text'", () => {
            it('returns TextMessage class instance', () => {
                messageJSON.type = MessageType.TEXT;
                messageJSON.text = 'hoge';
                EventsParser._parseMessage(messageJSON).should.instanceof(SDK.TextMessage);
            });
        });

        // TODO: text以外のメッセージタイプのテストも書く
    });

    describe('._parseMessageType(typeString)', () => {
        const MessageType = SDK.MessageType;

        describe("on typeString is 'text'", () => {
            it('returns MessageType.TEXT', () => {
                EventsParser._parseMessageType('text').should.equal(MessageType.TEXT);
            });
        });

        describe("on typeString is 'image'", () => {
            it('returns MessageType.IMAGE', () => {
                EventsParser._parseMessageType('image').should.equal(MessageType.IMAGE);
            });
        });

        describe("on typeString is 'video'", () => {
            it('returns MessageType.VIDEO', () => {
                EventsParser._parseMessageType('video').should.equal(MessageType.VIDEO);
            });
        });

        describe("on typeString is 'audio'", () => {
            it('returns MessageType.AUDIO', () => {
                EventsParser._parseMessageType('audio').should.equal(MessageType.AUDIO);
            });
        });

        describe("on typeString is 'location'", () => {
            it('returns MessageType.LOCATION', () => {
                EventsParser._parseMessageType('location').should.equal(MessageType.LOCATION);
            });
        });

        describe("on typeString is 'sticker'", () => {
            it('returns MessageType.STICKER', () => {
                EventsParser._parseMessageType('sticker').should.equal(MessageType.STICKER);
            });
        });

        describe("on typeString is 'imagemap'", () => {
            it('returns MessageType.IMAGEMAP', () => {
                EventsParser._parseMessageType('imagemap').should.equal(MessageType.IMAGEMAP);
            });
        });

        describe("on typeString is 'template'", () => {
            it('returns MessageType.TEMPLATE', () => {
                EventsParser._parseMessageType('template').should.equal(MessageType.TEMPLATE);
            });
        });

        describe('on typeString is unsupported one', () => {
            it('throws when the argument is present', () => {
                (() => EventsParser._parseMessageType('hoge')).should.throw('hoge is not supported');
            });

            it('throws when the argument is not present', () => {
                (() => EventsParser._parseMessageType()).should.throw('Argument is required');
            });
        });
    });

    describe('._parseSource(sourceJSON)', () => {
        const SourceType = SDK.SourceType;

        describe("on sourceJSON.type is 'user'", () => {
            const type = 'user';
            const userId = 'U206d25c2ea6bd87c17655609a1c37cb8';
            const sourceJSON = {
                type,
                userId
            }
            const source = EventsParser._parseSource(sourceJSON);

            it('has type which is SourceType.USER', () => {
                source.type.should.equal(SourceType.USER);
            });

            it('has id which is userId used in initializing', () => {
                source.id.should.equal(userId);
            });
        });

        describe("on sourceJSON.type is 'group'", () => {
            const type = 'group';
            const groupId = 'cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
            const sourceJSON = {
                type,
                groupId
            }
            const source = EventsParser._parseSource(sourceJSON);

            it('has type which is SourceType.GROUP', () => {
                source.type.should.equal(SourceType.GROUP);
            });

            it('has id which is groupId used in initializing', () => {
                source.id.should.equal(groupId);
            });
        });
    });

    describe('._parseSourceType(typeString)', () => {
        const SourceType = SDK.SourceType;

        describe("on typeString is 'user'", () => {
            it('returns SourceType.USER', () => {
                EventsParser._parseSourceType('user').should.equal(SourceType.USER);
            });
        });

        describe("on typeString is 'group'", () => {
            it('returns SourceType.GROUP', () => {
                EventsParser._parseSourceType('group').should.equal(SourceType.GROUP);
            });
        });

        describe('on typeString is unsupported one', () => {
            it('throws when the argument is present', () => {
                (() => EventsParser._parseSourceType('hoge')).should.throw('hoge is not supported');
            });

            it('throws when the argument is not present', () => {
                (() => EventsParser._parseSourceType()).should.throw('Argument is required');
            });
        });
    });
});
