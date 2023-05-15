Cypress.Commands.add('defineFilterAliases', () => {

    cy.get('a[href="/staff/37/goals/"]').as('Goal Menu').should('exist').click();
    cy.get('a[href="#observe_goals_container"]').as('Observe Menu').should('exist').click();
    cy.contains('label', 'g1').siblings('input[type="checkbox"]').should('exist').as('Group');
    cy.get('input[type="checkbox"][id="topic_89"]').should('exist').as('Goal');
    cy.contains('label', ' Medium').siblings('input[type="checkbox"]').should('exist').as('Medium level');
    cy.contains('label', 'Expected by now only').siblings('input[type="checkbox"]').should('exist').as('Expected by now only');
    cy.contains('label', 'Not observed').siblings('input[type="checkbox"]').should('exist').should('be.checked').as('Not observed');
    cy.get('button[onclick="applyGoalFilters(this)"]').should('exist').as('Apply Filter Button');
    cy.get('input[name="all_levels"]').should('exist').should('be.checked').as('All Levels');
    cy.get('input[name="all_groups"]').should('exist').as('All groups');
    cy.get('input[name="all_goals"]').should('exist').as('All goals');
    cy.get('#observer_table_div').should('exist').as('observer table');
  })



  Cypress.Commands.add('defineAddStaffAliases',()=>{
    cy.get('#new_staff').should('exist').as('Staff Name');
    cy.get('button[onclick="addStaff()"]').should('contain.text','Add staff').should('exist').as('Add Staff Button');
  })

  Cypress.Commands.add('defineShowStaffInfoAliases',()=>{
    cy.get('tr[id="staff_Ahmad"] td[class="sorting_1"]').contains('td', 'Ahmad').should('exist').as('staff Info Button');
  });
  
  Cypress.Commands.add('defineEditStaffInfoAliases',()=>{
    cy.get('li[data-dt-row="6"] a[onclick="showEditRow(\'Ahmad\')"]').should('exist').as('Edite Staff info Button');
  });

  Cypress.Commands.add('defineEdiEStafNameAliases',()=>{
    cy.get('input[name="first_name"][form="form_staff_Ahmad"]').should('exist').as('Staff First Name');

  });
  Cypress.Commands.add('defineDeleteStaffAliases',()=>{
    cy.get('li[data-dtr-index="10"] a[data-href="Ahmad"]').should('contain.text','Remove').should('exist').as('Remove Staff Button');
  });
  Cypress.Commands.add('defineConfirmDeleteStaffAliases',()=>{
    cy.get('a[href="/staff/37/delete/staff/Ahmad"][data-href="Ahmad"]').should('exist').as('Confirm Staff Remove Button');
  });
