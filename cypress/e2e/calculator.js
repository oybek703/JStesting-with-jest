describe('anonymous calculator', () => {
  it('should make calculations', function() {
      cy.visit('/')
      cy.findByText(/^1$/).click()
      cy.findByText(/^\+$/).click()
      cy.findByText(/^2$/).click()
      cy.findByText(/^=$/).click()
      cy.findByTestId('total').should('have.text', '3')
  })
})

describe('authenticated user', () => {
  it('should display authenticated user', function() {
    cy.createUser()
      .then(user => {
        cy.findByText(/login/i).click()
        cy.submitForm(user)
        cy.findByTestId('username-display').should('have.text', user.username)
        cy.findByText(/logout/i).click()
        cy.findByTestId('username-display').should('not.exist')
    })

  })
})