describe('Template.Action.URI', () => {
    const SDK = require('../../../../../');
    const Template = SDK.Template;
    const URI = Template.Action.URI;

    describe('.constructor(label, linkUrl)', () => {
        describe('on arguments are correct', () => {
            const label = 'label';
            const linkUrl = 'https://example.com/';
            const uri = new URI(label, linkUrl);

            it('has .type which equals TemplateActionType.URI', () => {
                uri.type.should.equal(SDK.TemplateActionType.URI);
            });
        });
    });
});
