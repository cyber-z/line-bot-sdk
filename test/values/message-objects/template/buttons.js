describe('Buttons', () => {
    const SDK = require('../../../../');
    const Buttons = SDK.Template.Buttons;
    const Action = SDK.Template.Action;

    describe('.constructor(buttonsContent, altText)', () => {
        describe('on buttonsContent is correctly inputted', () => {
            const thumbnailImageUrl = 'https://example.com/hoge.jpg';
            const title = 'some title';
            const text = 'some description';
            const actions = [
                new Action.Message('label1', 'foo'),
                new Action.Postback('label2', 'bar'),
                new Action.URI('label3', 'https://example.com/')
            ];

            const buttonsContent = new SDK.Template.ButtonsContent(
                thumbnailImageUrl, title, text, actions);

            it('returns Buttons instance', () => {
                new Buttons(buttonsContent).should.instanceof(Buttons);
            });
        });
    });
});
