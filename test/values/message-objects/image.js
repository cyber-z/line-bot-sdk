describe('Image', () => {
    const SDK = require('../../../');
    const Image = SDK.Image;

    describe('.constructor(originalContentUrl, previewImageUrl)', () => {
        describe('on arguments are correct', () => {
            const originalContentUrl = 'https://example.com/original.jpg';
            const previewImageUrl = 'https://example.com/preview.jpg';

            it('returns Image instance', () => {
                new Image(originalContentUrl, previewImageUrl)
                    .should.instanceof(Image);
            });
        });
    });
});
