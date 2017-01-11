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
            const buttons = new Buttons(buttonsContent);

            it('has template.type which is TemplateType.BUTTONS', () => {
                buttons.template.type.should.equal(SDK.TemplateType.BUTTONS);
            });
        });
    });
});
