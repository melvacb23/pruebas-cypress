describe('Ejercicio 3 - Checkboxes', () => {

  it('Debe seleccionar los checkboxes', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()

    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .should('be.checked')

  })

})