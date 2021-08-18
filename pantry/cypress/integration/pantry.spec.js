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
    it('after clicking the \'All\' option in the Pantry dropdown, a new body should be rendered', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Pantry').click();
        cy.findByText('All').click();
        cy.findByLabelText('PantryBody').should('exist');
    })
    it('after clicking the \'Reserved\' option in the Pantry dropdown, a new body should be rendered', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Pantry').click();
        cy.findByText('Reserved').click();
        cy.findByLabelText('PantryBody').should('exist');
    })
    it('after clicking the \'Unreserved\' option in the Pantry dropdown, a new body should be rendered', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Pantry').click();
        cy.findByText('Unreserved').click();
        cy.findByLabelText('PantryBody').should('exist');
    })
    it('after clicking the \'Create\' option in the Recipes dropdown, a new body should be rendered', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Recipe').click();
        cy.findByText('Create').click();
        cy.findByLabelText('RecipeBody').should('exist');
    })
    it('after clicking the \'All\' option in the Recipes dropdown, a new body should be rendered', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Recipe').click();
        cy.findByText('All').click();
        cy.findByLabelText('RecipeBody').should('exist');
    })
    it('after clicking the \'Lists\' option in the Recipes dropdown, a new body should be rendered', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Recipe').click();
        cy.findByText('Lists').click();
        cy.findByLabelText('RecipeBody').should('exist');
    })
    it('after clicking the \'New List\' option in the Groery List dropdown, a new body should be rendered', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Grocery List').click();
        cy.findByText('New List').click();
        cy.findByLabelText('GroceryBody').should('exist');
    })
    it('after clicking the \'Created Lists\' option in the Grocery List dropdown, a new body should be rendered', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Grocery List').click();
        cy.findByText('Created Lists').click();
        cy.findByLabelText('GroceryBody').should('exist');
    })
    it('when the Pantry title is clicked, the home page is rendered', ()=>{
        cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Grocery List').click();
        cy.findByText('Created Lists').click();
        cy.findByRole('heading').findByText('Pantry').click();
        cy.findByLabelText('Home').should('exist')
    })
    
    //cy.get('input').invoke('attr', 'placeholder').should('contain', 'username')
    //Deeper into Recipes - Create
    // it('Once inside Recipes - Create, there should be an add new item button', ()=>{
    //     cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Recipes').click();
    //     cy.findByText('Create').click();
    //     cy.findByLabelText('RecipeBody').should('exist');
    //     cy.contains('button', 'Add a new item').should('exist')
    // })
    // //test for recipe name
    // it('Once inside Recipes - Create, there should be a Recipe Name field', ()=>{
    //     cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Recipes').click();
    //     cy.findByText('Create').click();
    //     cy.get('form').findByRole('textbox').findByText().invoke('attr', 'name').should('contain', 'Recipe Name');
      
    // })
    //test for recipe instructions
    // it('Once inside Recipes - Create, there should be an add new item button', ()=>{
    //     cy.findByLabelText('navbar').get('.css-yk16xz-control').contains('Recipes').click();
    //     cy.findByText('Create').click();
        
    //     cy.contains('button', 'Add a new item').should('exist')
    // })
})

// cy.get('form').within(($form) => {
//     // temporarily escape the .within context
//     cy.root().closest('.example').find('#name').type('Joe')
//     // continue using the .within context
//     cy.get('input[name="email"]').type('john.doe@email.com')
//     cy.get('input[name="password"]').type('password')
//     cy.root().submit()
//   })


// cy.findByText('All').should('exist');
// cy.findByText('Lists').should('exist');