// describe('Login page', ()=>{

//     beforeEach(()=>{
//         cy.visit('/');
//         cy.get('select[name="login_as"]').as('Login')
//     })
     
//     it('open log in page', ()=>{
//         cy.get('form[action="/login/"]').should('exist');
//     })

//     it('Log in contain username', ()=>{
//         cy.get('#id_username').should('exist').should('have.attr','name','username');
//         cy.get('#id_username').should('exist').should('have.attr','required');
//     })

//     it('Login contain login as', ()=>{
//         cy.get('@Login').find('option').should(($option)=>{
//             expect($option).to.have.length(3);
//             expect($option.eq(0)).to.have.value('student');
//             expect($option.eq(1)).to.have.value('staff');
//             expect($option.eq(2)).to.have.value('admin/admin_dashboard');
//         });
//         cy.get('form[action="/login/"] > button[type="submit"]').should('exist').should('contain.text','Login');
//     })

//     it('Login failed', () => {
//         cy.get('#id_username').type( 'QAUser is not exist');
//         cy.get ('@Login').select('staff');
//         cy.get ('#id_password'). type('TTGGVVDDS8^&{enter}');
//         // cy.get('form[action="/login/"] > button[type="submit"]').click();
//         cy.get ('.alert').should ('contain.text', 'Incorrect username or password.');
//     })

//     it ('Login works', () => {
//         cy.get ('#id_username'). type('Ibtihaj_7');
//         cy.get ('#id_password').type('Ibtihaj@12345');
//         cy.get ('@Login').select('staff');
//         cy.get ('form[action="/login/"] > button[type="submit"]').click();
//         cy.get ('i.fas.fa-user').should('exist').should('contain.text', 'Ibtihaj_7');
//     })
// })


describe('staff page', ()=>{

    beforeEach(()=>{
        cy.visit('/');
        cy.get ('#id_username'). type('Ibtihaj_7');
        cy.get ('#id_password').type('Ibtihaj@12345');
        cy.get ('select[name="login_as').select('staff');
        cy.get ('form[action="/login/"] > button[type="submit"]').click();
        cy.get ('a[class="nav-link active w-100"]').should('exist').should('contain.text', 'Open').click();
        cy.get('.mr-auto > :nth-child(3) > .nav-link').should('exist').should('contain.text', 'Staff').click();
    })

    it ('all required fields and button are present in staff page. ', () => {
        cy.get('#new_staff').should('exist');
        cy.get('.toolbar > .row > :nth-child(2) > .btn').should('exist');
        cy.get('#staffs_filter > label').should('exist');
        cy.get('label > .form-control').should('exist');
        cy.get('#moduleDetailsMenu').should('exist');
        cy.get('#userInfoMenu').should('exist');
        cy.get('.nav-link > img').should('exist');
        cy.get('.dataTables_scroll').should('exist');
        cy.get('.dataTables_scrollHeadInner > .table > .thead-dark > tr > .sorting_asc').should('exist');
        cy.get('.sorting_asc').should('exist');
    })

    it ('search exist staff with his userName', () => {
        cy.get('label').should('contain.text','Search:').should('exist');
        cy.get('input[type="search"]').should('have.attr','placeholder');
        cy.get('label > .form-control').type('omar{enter}');
        cy.get('#staff_omar > .sorting_1').should('contain.text','omar');
        cy.get('#staff_omar > :nth-child(2)').should('exist');
        cy.get('.dataTables_scrollHeadInner > .table > .thead-dark > tr > .sorting_asc')

        cy.get('[style="width: 92.8984px;"]').should('exist');
        cy.get('[style="width: 90.8984px;"]').should('exist');
        cy.get('[style="width: 116.898px;"]').should('exist');
        cy.get('#staff_omar > :nth-child(2)').should('exist');
        cy.get('#staff_omar > :nth-child(3)').should('exist');
        cy.get('#staff_omar > :nth-child(4)').should('exist');
        cy.get('#staffs_info').should('exist');

    })

    it ('edit email with valid input', () => {
        cy.get('tr[id="staff_omar"] td[class="sorting_1"]').contains('td', 'omar').should('exist').click();
        cy.get('.dtr-data > .row > :nth-child(1) > a').should('exist');
        cy.get('.dtr-data > .row > :nth-child(1) > a').click();
        cy.get('input[type="email"]').should('have.attr','name','email').should('have.attr','required');
        cy.get('input[value="omar@gmail.com"]').should('have.attr','name','email').clear().type('omar@gmail.com{enter}');
    })

    it ('edit email with invalid input', () => {
        cy.get('tr[id="staff_omar"] td[class="sorting_1"]').contains('td', 'omar').should('exist').click();
        cy.get('.dtr-data > .row > :nth-child(1) > a').should('exist');
        cy.get('.dtr-data > .row > :nth-child(1) > a').click();
        cy.get('input[type="email"]').should('have.attr','name','email').should('have.attr','required');
        cy.get('input[value="omar@gmail.com"]').should('have.attr','name','email').clear().type('john@example{enter}');
        cy.get('form[name="error_message"]').should('contain.text','bad input');
    })
})