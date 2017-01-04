describe('Video', () => {
    const SDK = require('../../../');
    const Video = SDK.Video;

    describe('.constructor(originalContentUrl, previewImageUrl)', () => {
        describe('on arguments are correct', () => {
            const originalContentUrl = 'https://example.com/original.jpg';
            const previewImageUrl = 'https://example.com/preview.jpg';

            it('returns Video instance', () => {
                new Video(originalContentUrl, previewImageUrl)
                    .should.instanceof(Video);
            });
        });
    });
});
