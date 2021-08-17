// pantry.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('pantry app testing', ()=>{
    beforeEach('function', ()=>{
        cy.visit('http://localhost:3000');
    });
    it('should pass this test', ()=>{
        expect(true).to.equal(true);
    })
    it('should display a navbar', ()=>{
        cy.findByLabelText('navbar').should('exist');
    })
})