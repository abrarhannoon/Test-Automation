describe('filter page', ()=>{

    beforeEach(()=>{
        cy.visit('/');
        cy.get ('#id_username'). type('Ibtihaj_7');
        cy.get ('#id_password').type('Ibtihaj@12345');
        cy.get ('select[name="login_as').select('staff');
        cy.get ('form[action="/login/"] > button[type="submit"]').click();
        cy.get ('a[class="nav-link active w-100"]').should('exist').should('contain.text', 'Open').click();
        cy.get('a[href="/staff/37/goals/"]').should('exist').should('contain.text', 'GOALs').click();
    })

    it ('Verify that all filters and buttons are presented on the page', () => {
        cy.get(':nth-child(1) > .badge').should('exist')
        cy.get(':nth-child(2) > .badge').should('exist')
        cy.get(':nth-child(3) > .badge').should('exist')
        cy.get(':nth-child(4) > .badge').should('exist')
        cy.get('[style=" padding-right: 0px; padding-left: 20px; "] > .text-center > strong').should('exist')
        cy.get('[style=" padding-left: 0px; max-height: 71vh; "] > .border-radius-0 > strong').should('exist')
        cy.get('[style=" padding-left: 0px; max-height: 71vh; "] > :nth-child(3) > strong').should('exist')
        cy.get(':nth-child(5) > strong').should('exist')
        cy.get('.align-items-center > :nth-child(3) > .btn').should('contain.text','Apply filters').should('exist')
        cy.get(':nth-child(4) > .btn').should('exist').should('contain.text','Unobserve').should('exist')
        cy.get(':nth-child(5) > .btn').should('exist').should('contain.text','Observe').should('exist')
        cy.get(':nth-child(6) > .form-control').should('exist')
        cy.get('#observer_table_div').should('exist')
        cy.get('[style="width: 15%;padding-left: 3%;"] > strong').should('exist')
        cy.get('.col-4').should('exist')
        cy.get('.col-2 > strong').should('exist')
        cy.get('select[name="grade"] > option').should(($option) => {
            expect($option).to.have.length(12);
            expect($option.eq(0)).to.have.value('Grade');
            expect($option.eq(1)).to.have.value('0');
            expect($option.eq(2)).to.have.value('1');
            expect($option.eq(3)).to.have.value('2');
            expect($option.eq(4)).to.have.value('3');
            expect($option.eq(5)).to.have.value('4');
            expect($option.eq(6)).to.have.value('5');
            expect($option.eq(7)).to.have.value('6');
            expect($option.eq(8)).to.have.value('7');
            expect($option.eq(9)).to.have.value('8');
            expect($option.eq(10)).to.have.value('9');
            expect($option.eq(11)).to.have.value('10');
          });
    })

})