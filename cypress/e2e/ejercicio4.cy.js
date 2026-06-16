describe('Ejercicio 4 - Prueba de API', () => {

  it('Debe validar el GET de la lista de usuarios', () => {

    cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(10)
        expect(response.body[0]).to.have.property('name')
      })

  })

})