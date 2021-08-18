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
    it('should be able to click a Pantry dropdown menu', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Pantry').click();
    })
    it('after clicking the Pantry dropdown, there should be three options', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Pantry').click();
        cy.findByText('All').should('exist');
        cy.findByText('Reserved').should('exist');
        cy.findByText('Unreserved').should('exist');
    })
    it('should be able to click a Recipes dropdown menu', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Recipes').click();
    })
    it('after clicking the Recipes dropdown, there should be three options', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Recipes').click();
        cy.findByText('Create').should('exist');
        cy.findByText('All').should('exist');
        cy.findByText('Lists').should('exist');
    })
    it('should be able to click a Grocery List dropdown menu', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Grocery List').click();
    })
    it('after clicking the Grocery List dropdown, there should be three options', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Grocery List').click();
        cy.findByText('Created Lists').should('exist');
        cy.findByText('New List').should('exist');
    })
})