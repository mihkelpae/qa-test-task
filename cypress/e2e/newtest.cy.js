/// <reference types ="cypress" />


it('Test01', function()  {

  cy.visit('https://app.klausapp-staging.com/')


  //login button is disabled
  cy.get("button[type=\"submit\"]").should('be.disabled')

  //login
  cy.get("input[type=\"email\"]").type("klaus-test-automation+yuki@klausapp-staging.com")
  cy.get("input[type=\"password\"]").type("Yuki-T3stTask")
  cy.get("button[type=\"submit\"]").click()

  cy.get('[data-testid="navbar-coaching"]').click()
  cy.get('[href="/pins"]').click()

  //navigate to dashboard
  cy.get('[href="/dashboard"]').click()
  cy.url().should('contain', '/dashboard')

  //open pin dashboard 
  cy.get('[data-testid="pin-dashboard"]').first().click()
  cy.get('.q-modal__header').should('contain.text', 'Pin this dashboard')

  //edit modal
  cy.get('[data-testid="pins-folder-picker"]').type('Yuki{enter}')
  cy.get('[data-testid="comment-editor"]')
  .type('@Manage{enter}').type("Hello Excalibur, do you like cats?")
  .should('contain.text','Hello Excalibur, do you like cats?')
  cy.get('[data-testid="pin-save"]').should('be.visible').click({ force: true })

  //use shortcut to navigate to /pins
  cy.get('.toast__button').should('be.visible').click()
  cy.url().should('contain','/pins')
  cy.go('back').should('contain','/dashboard')
})