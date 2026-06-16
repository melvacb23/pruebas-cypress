describe('Ejercicio 5 - Formulario', () => {

  it('Debe diligenciar y enviar un formulario', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('melvacb23@gmail.com')
      .should('have.value', 'melvacb23@gmail.com')

    cy.get('.action-disabled')
      .should('be.disabled')

    cy.contains('h1', 'Actions').should('be.visible')

  })

})