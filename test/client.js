'use strict';

describe('Client', () => {
    require('dotenv').config();

    const chai = require('chai');
    chai.should();

    const SDK = require('../');
    const Client = SDK.Client;

    describe('for class methods', () => {
        describe('.constructor(accessToken)', () => {
            describe('on accessToken is the access token issued by LINE', () => {
                const accessToken = process.env.TEST_ACCESS_TOKEN;

                it('returns Client instance', () => {
                    new Client(accessToken).should.instanceof(Client);
                });
            });
        });
    });

    describe('for instance methods', () => {
        let client;
        before(() => client = new Client(process.env.TEST_ACCESS_TOKEN));

        describe('#push(to, messages)', () => {
            describe('on messages are less than 5', () => {
                const to = process.env.TEST_SOURCE_ID;
                const messages = [
                    new SDK.Sticker(2, 19),
                    new SDK.Location(
                        'test location',
                        '東京都渋谷区渋谷２丁目 渋谷駅',
                        35.6581, 139.701742
                    ),
                    new SDK.Image('https://cyber-z.co.jp/ogp-3.jpg', 'https://cyber-z.co.jp/ogp-3.jpg'),
                    new SDK.Template.Carousel(
                        [
                            new SDK.Template.ButtonsContent(
                                'https://cyber-z.co.jp/ogp-3.jpg',
                                'test carousel item A',
                                'test carousel text', [new SDK.Template.Action.Message('label', 'test')]
                            ),
                            new SDK.Template.ButtonsContent(
                                'https://cyber-z.co.jp/ogp-3.jpg',
                                'test carousel item B',
                                'test carousel text', [new SDK.Template.Action.Message('label', 'test')]
                            )
                        ],
                        'This is test carousel'
                    )
                ];

                it('send push messages to user', done => {
                    client.push(to, messages).then(res => {
                        res.status.should.to.equal(200);
                        done();
                    }).catch(err => {
                        throw err;
                    });
                });
            });

            describe('on messages are more than 5', () => {
                const to = process.env.TEST_SOURCE_ID;
                const messages = [
                    new SDK.TextMessage('test text message'),
                    new SDK.TextMessage('test text message'),
                    new SDK.TextMessage('test text message'),
                    new SDK.TextMessage('test text message'),
                    new SDK.TextMessage('test text message'),
                    new SDK.TextMessage('test text message')
                ];

                it('recieve the error of too mush messages', done => {
                    client.push(to, messages).catch(err => {
                        err.status.should.to.equal(400);
                        done();
                    });
                });
            });

            describe('on to and messages is incorrect', () => {
                const to = 'invalid id';
                const messages = [];

                it('returns error', (done) => {
                    client.push(to, messages).catch(err => {
                        err.status.should.not.to.equal(200);
                        done();
                    });
                });
            });
        });
    });
});
