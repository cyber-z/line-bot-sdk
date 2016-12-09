describe('TextMessage', () => {
    const SDK = require('../../../');
    const TextMessage = SDK.TextMessage;

    describe('.constructor(text)', () => {
        describe('on text is string', () => {
            const text = 'some string';

            it('returns TextMessage instance', () => {
                new TextMessage(text).should.instanceof(TextMessage);
            });
        });
    });
});
