'use strict';

describe('Client', () => {
    require('dotenv').config();

    const chai = require('chai');
    const assert = chai.assert;
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
            describe('on to and messages is correct', () => {
                const to = process.env.TEST_SOURCE_ID;
                const messages = [
                  new SDK.TextMessage('test text message'),
                  new SDK.Template.Buttons(
                      new SDK.Template.ButtonsContent(
                          'https://cyber-z.co.jp/ogp-3.jpg',
                          'test buttons title',
                          'test buttons text',
                          [new SDK.Template.Action.Message('label', 'test')]
                      ),
                      'This is test buttons'
                  )
                ];

                it('send push messages to user', (done) => {
                    client.push(to, messages).then(res => {
                        res.status.should.to.equal(200);
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
