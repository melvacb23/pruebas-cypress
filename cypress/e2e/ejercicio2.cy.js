describe('Ejercicio 2 - Escribir en un campo de texto', () => {

  it('Debe escribir un correo en el campo email', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('melvacb23@gmail.com')
      .should('have.value', 'melvacb23@gmail.com')

  })

})