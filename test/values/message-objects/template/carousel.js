describe('Carousel', () => {
    const SDK = require('../../../../');
    const Carousel = SDK.Template.Carousel;
    const Action = SDK.Template.Action;

    describe('.constructor(buttonsContents, altText)', () => {
        describe('on buttonsContents is correctly inputted', () => {
            const thumbnailImageUrl = 'https://example.com/hoge.jpg';
            const title = 'some title';
            const text = 'some description';
            const actions = [
                new Action.Message('label1', 'foo'),
                new Action.Postback('label2', 'bar'),
                new Action.URI('label3', 'https://example.com/')
            ];

            const buttonsContents = [
                new SDK.Template.ButtonsContent(thumbnailImageUrl, title, text, actions),
                new SDK.Template.ButtonsContent(thumbnailImageUrl, title, text, actions)
            ];

            it('returns Carousel instance', () => {
                new Carousel(buttonsContents).should.instanceof(Carousel);
            });
        });
    });
});
