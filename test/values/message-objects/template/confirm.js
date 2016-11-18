describe('Confirm', () => {
    const chai = require('chai');
    const should = chai.should();

    const SDK = require('../../../../');
    const Confirm = SDK.Template.Confirm;
    const Action = SDK.Template.Action;

    describe('.constructor(text, actions, altText)', () => {
        describe("on buttonsContents is correctly inputted", () => {
            const text = 'Some question is here...';
            const actions = [
                new Action.Postback('Yes', 'Yes', 'Yes'),
                new Action.Postback('No', 'No', 'No')
            ];

            it('returns Confirm instance', () => {
                new Confirm(text, actions).should.instanceof(Confirm);
            });
        });
    });
});
