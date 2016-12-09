describe('Audio', () => {
    const SDK = require('../../../');
    const Audio = SDK.Audio;

    describe('.constructor(originalContentUrl, duration)', () => {
        describe('on arguments are correct', () => {
            const originalContentUrl = 'https://example.com/original.m4a';
            const duration = 1000;

            it('returns Audio instance', () => {
                new Audio(originalContentUrl, duration)
                    .should.instanceof(Audio);
            });
        });
    });
});
