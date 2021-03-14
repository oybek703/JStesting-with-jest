import {buildUser} from  '../support/generate'
describe('registration', () => {
  it('should register new user', function() {
    const user = buildUser()
    cy.visit('/')
    cy.findByText(/register/i).click()
    cy.submitForm(user)
    cy.assertHome()
    cy.assertLoggedInAs(user)
  })
  it('should throw error if there is error while registering', () => {
    cy.server().intercept('POST', 'http:/localhost:3000/register', {
      statusCode: 500,
      body: {}
    })
    cy.visit('/register')
    cy.findByText(/submit/i).click()
    cy.findByText(/error. * please try again/i)
  })
})