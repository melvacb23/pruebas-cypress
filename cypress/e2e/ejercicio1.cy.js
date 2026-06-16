describe('Ejercicio 1 - Página principal de Cypress', () => {
  it('Debe visitar la página principal y validar elementos visibles', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Kitchen Sink').should('be.visible')
    cy.contains('type').should('exist')
  })
})