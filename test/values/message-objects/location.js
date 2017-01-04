describe('Location', () => {
    const SDK = require('../../../');
    const Location = SDK.Location;

    describe('.constructor(title, address, latitude, longitude)', () => {
        describe('on arguments are correct', () => {
            const title = 'title';
            const address = 'address';
            const latitude = 35.6581;
            const longitude = 139.701742;

            it('returns Location instance', () => {
                new Location(title, address, latitude, longitude)
                    .should.instanceof(Location);
            });
        });
    });
});
