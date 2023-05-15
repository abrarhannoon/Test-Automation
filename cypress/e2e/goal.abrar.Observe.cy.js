
import './goal.abrar.aliases.cypress'

describe('Observe page', () => {



    beforeEach(() => {
 
            cy.visit("accounts/login/?next=/");
            cy.get('#id_username').type('Karam_7');
            cy.get('#id_password').type('Karam@123');
            cy.get('select[name="login_as"]').select('staff');
            cy.get('form[action="/login/"] > button[type="submit"]').click();

            cy.visit("staff/37/goals/");
            cy.defineFilterAliases();

    

    });


    it('Verify filter functionality with Valid: specific Goal, specific group, and other default selections.',()=>{
        cy.get('@Goal').check({force: true});
        cy.get('@Group').check({force: true});
        cy.get('@Apply Filter Button', { timeout: 10000 }).should('be.visible').should('contain.text','Apply filters').click();
        cy.get('@observer table', { timeout: 10000 }).should('be.visible');
            
        cy.defineFilterDataResultAliases();

        
          


    })

    it('Verify filter functionality with Valid: specific Goal, specific group, Medium level, And not observe selections',()=>{
        cy.get('@Goal').check({force: true});
        cy.get('@Group').check({force: true});
        cy.get('@All Levels').uncheck({force: true});
        cy.get('@Medium level').check({force: true});
        cy.get('@Apply Filter Button', { timeout: 10000 }).should('be.visible').should('contain.text','Apply filters').click();
        cy.get('@observer table', { timeout: 10000 }).should('be.visible');

        cy.defineFilterDataResultAliases();


    })

    it('Verify filter functionality with Valid: specific Goal, All groups, Medium level, And not observe selections',()=>{
        cy.get('@Goal').check({force: true});
        cy.get('@All groups').check({force: true});
        cy.get('@All Levels').uncheck({force: true});
        cy.get('@Medium level').check({force: true});
        cy.get('@Apply Filter Button').should('contain.text','Apply filters', { timeout: 10000 }).should('be.visible').click()
        cy.get('@observer table', { timeout: 20000 }).should('be.visible');

        cy.defineFilterDataResultAliases();

    })
    it('Verify filter functionality with Valid: All Goals, All groups, All level, And not observe selections',()=>{
        cy.get('@All goals').check({force: true});
        cy.get('@All groups').check({force: true});
        cy.get('@All Levels').check({force: true});
        cy.get('@Apply Filter Button', { timeout: 10000 }).should('be.visible').should('contain.text','Apply filters').click()
        cy.get('@observer table', { timeout: 10000 }).should('be.visible');

        cy.defineFilterDataResultAliases();

      


    })
    it('Verify filter functionality with Valid: All Goals, All groups, All level,Not observed, And Expected by now selections',()=>{
        cy.get('@All goals').check({force: true});
        cy.get('@All groups').check({force: true});
        cy.get('@All Levels').check({force: true});
        cy.get('@Expected by now only').should('exist').check({force: true});
        cy.get('@Apply Filter Button', { timeout: 10000 }).should('be.visible').should('contain.text','Apply filters').click()
        
        cy.get('@observer table', { timeout: 20000 }).should('be.visible');
        cy.defineFilterDataResultAliases();

    });









});



    
