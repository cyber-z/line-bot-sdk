describe('Audio', () => {
    const SDK = require('../../../../');
    const Imagemap = SDK.Imagemap;

    describe('.constructor(baseUrl, altText, baseSizeWidth, baseSizeHeight, actions)', () => {
        describe('on arguments are correct', () => {
            const baseUrl = 'https://example.com/original.m4a';
            const altText = 'alttext';
            const baseSizeWidth = 1000;
            const baseSizeHeight = 1000;
            const actions = [new Imagemap.Action.Message(
                'text',
                new Imagemap.Area(0, 0, 1000, 1000)
            )];

            it('returns Imagemap instance', () => {
                new Imagemap(baseUrl, altText, baseSizeWidth, baseSizeHeight, actions)
                    .should.instanceof(Imagemap);
            });
        });
    });
});
