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