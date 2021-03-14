import {buildUser} from '../support/generate'

describe('login', function() {
  it('should login existing user', function() {
    cy.createUser().then(user => {
      cy.visit('/')
      cy.findByText(/login/i).click()
      cy.submitForm(user)
      cy.assertHome()
      cy.assertLoggedInAs(user)
    })
  })
})