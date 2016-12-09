describe('Image', () => {
    const SDK = require('../../../');
    const Image = SDK.Image;

    describe('.constructor(originalContentUrl, previewImageUrl)', () => {
        describe('on arguments are correct', () => {
            const originalContentUrl = 'https://cyber-z.co.jp/ogp-3.jpg';
            const previewImageUrl = 'https://cyber-z.co.jp/ogp-3.jpg';

            it('returns Image instance', () => {
                new Image(originalContentUrl, previewImageUrl)
                    .should.instanceof(Image);
            });
        });
    });
});
