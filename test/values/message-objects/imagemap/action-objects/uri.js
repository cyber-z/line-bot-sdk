describe('Imagemap.Action.URI', () => {
    const SDK = require('../../../../../');
    const Imagemap = SDK.Imagemap;
    const URI = Imagemap.Action.URI;

    describe('.constructor(linkUrl, area)', () => {
        describe('on arguments are correct', () => {
            const linkUrl = 'https://example.com/';
            const area = new Imagemap.Area(0, 0, 1000, 1000);
            const uri = new URI(linkUrl, area);

            it('has .type which equals ImagemapActionType.URI', () => {
                uri.type.should.equal(SDK.ImagemapActionType.URI);
            });
        });

        describe('on argument `linkUrl is lack`', () => {
            const linkUrl = '';
            const area = new Imagemap.Area(0, 0, 1000, 1000);

            it('throws', () => {
                (() => new URI(linkUrl, area)).should.throw(Error);
            });
        });

        describe('on argument `area is lack`', () => {
            const linkUrl = 'https://example.com/';

            it('throws', () => {
                (() => new URI(linkUrl)).should.throw(Error);
            });
        });
    });
});
