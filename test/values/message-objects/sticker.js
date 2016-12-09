describe('Sticker', () => {
    const SDK = require('../../../');
    const Sticker = SDK.Sticker;

    describe('.constructor(packageId, stickerId)', () => {
        describe('on arguments are correct', () => {
            const packageId = 2;
            const stickerId = 19;

            it('returns Sticker instance', () => {
                new Sticker(packageId, stickerId)
                    .should.instanceof(Sticker);
            });
        });
    });
});
