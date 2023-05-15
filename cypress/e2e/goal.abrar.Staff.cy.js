
import './goal.abrar.aliases.cypress'
describe('Staff page', () => {



    beforeEach(() => {
      cy.visit("accounts/login/?next=/");
      cy.get('#id_username').type('Karam_7');
      cy.get('#id_password').type('Karam@123');
      cy.get('select[name="login_as"]').select('staff');
      cy.get('form[action="/login/"] > button[type="submit"]').click();
      cy.visit("staff/37/staffs/");
    
    });


  
   it("Add staff with valid name", () => {
    cy.defineAddStaffAliases();
      cy.get('@Staff Name').type('Yousef muradH',{ timeout: 10000 }).should('be.visible');
      cy.get('@Add Staff Button',{ timeout: 10000 }).click();
    });

    it("Add staff with  Invalid name", () => {
        cy.defineAddStaffAliases();
        cy.get('@Staff Name').type('...!@#$%.@#$#2308cx%^&6*33e(34^$2f$)...@#...._.......^$..');
        cy.get('@Add Staff Button',{ timeout: 10000 }).click();
      }); 
     
       it("Edit staff information with vaild first name",()=>{
            cy.defineShowStaffInfoAliases();
            cy.get('@staff Info Button',{ timeout: 10000 }).click();
            cy.defineEditStaffInfoAliases();
            cy.get('@Edite Staff info Button',{ timeout: 10000 }).click();
            cy.defineEdiEStafNameAliases(); 
            cy.get('@Staff First Name').clear().type("StudenAbrarL {enter}",{ timeout: 10000 }).should('be.visible');

            });

      it("Edit staff information with Invaild first name",()=>{
                cy.defineShowStaffInfoAliases();
                cy.get('@staff Info Button',{ timeout: 10000 }).click();
                cy.defineEditStaffInfoAliases();
                cy.get('@Edite Staff info Button',{ timeout: 10000 }).click();
                cy.defineEdiEStafNameAliases(); 
                cy.get('@Staff First Name').clear().type('~!@#$%^&*@!Abra3dr4465()_+/*- {enter}',{ timeout: 10000 }).should('be.visible');

          });

          it('Delete staff information',()=>{
            cy.defineShowStaffInfoAliases();
            cy.get('@staff Info Button',{ timeout: 10000 }).click();
            cy.defineDeleteStaffAliases();

            cy.get('@Remove Staff Button').click();
            cy.defineConfirmDeleteStaffAliases();
            cy.get('@Confirm Staff Remove Button',{ timeout: 10000 }).click()
         
          })
          
          
    
      

  });
 
    


          
