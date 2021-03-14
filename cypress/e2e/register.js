import {buildUser} from  '../support/generate'
describe('registration', () => {
  it('should register new user', function() {
    const user = buildUser()
    cy.visit('/')
    cy.findByText(/register/i).click()
    cy.findByLabelText(/username/i).type(user.username)
    cy.findByLabelText(/password/i).type(user.password)
    cy.findByText(/submit/i).click().url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.window().its('localStorage.token').should('be.a', 'string')
    cy.findByTestId('username-display').should('have.text', user.username)
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