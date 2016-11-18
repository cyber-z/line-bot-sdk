describe('ButtonsContent', () => {
    const chai = require('chai');
    const should = chai.should();

    const SDK = require('../../../../');
    const ButtonsContent = SDK.Template.ButtonsContent;
    const Action = SDK.Template.Action;

    describe('.constructor(thumbnailImageUrl, title, text, actions)', () => {
        const thumbnailImageUrl = 'https://example.com/hoge.jpg';
        const title = 'some title';
        const text = 'some description';
        const actions = [
            new Action.Message('label1', 'foo'),
            new Action.Postback('label2', 'bar'),
            new Action.URI('label3', 'https://example.com/')
        ];

        describe("on each arguments is correctly inputted", () => {
            it('returns ButtonsContent instance', () => {
                new ButtonsContent(thumbnailImageUrl, title, text, actions)
                    .should.instanceof(ButtonsContent);
            });
        });
    });
});
