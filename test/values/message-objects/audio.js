describe('Audio', () => {
    const SDK = require('../../../');
    const Audio = SDK.Audio;

    describe('.constructor(contentUrl, duration)', () => {
        describe('on arguments are correct', () => {
            const contentUrl = 'https://example.com/audio.m4a';
            const duration = 1000;

            it('returns Audio instance', () => {
                new Audio(contentUrl, duration)
                    .should.instanceof(Audio);
            });
        });
    });
});
