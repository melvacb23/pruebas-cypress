describe('Ejercicio 6 - Interceptar petición HTTP', () => {

  it('Debe simular respuesta del servidor', () => {

    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: [{ id: 1, name: 'Juan' }]
    }).as('getUsers')

    cy.visit('https://example.cypress.io')

    cy.window().then((win) => {
      return win.fetch('/api/users')
    })

    cy.wait('@getUsers').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      expect(interception.response.body[0]).to.have.property('name', 'Juan')
    })

  })

})