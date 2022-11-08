describe('Books', () => {
  it('can list, show, create, edit and delete books', () => {
    //list books - index
    // hacemos click al enlace
    cy.visit('/')
    .get('[data-cy = link-to-books]').click()
    //create books
    cy.get('[href="/libros/crear"]').click()
    .get('[data-cy input-book-title]')
    .type('New book from Cypress')
    .get('[data-cy=button-submit-book]')
    .click()
    .get('[data-cy = book-list]')
    .contains('New book from Cypress')
    //show book - muestra el ultimo elemento de libros
    // verifica el texto en el H1 del ultimo elemento
    cy.get('[data-cy^ = link-to-visit-book-]')
    .last()
    .click()
    .get('h1')
    .should('contain.text','New book from Cypress')
    // si cambiamos por H2 en el html,el test falla
    // ahora vuelve al menu inicial
    .get('[href="/libros"]').click()
    // Edit book
    cy.get('[data-cy^ = link-to-edit-book-]')
    .last()
    .click()
    .get('[data-cy input-book-title]')
    .clear()
    .type('Book Edited from Cypress')
    .get('[data-cy=button-submit-book]')
    .click()
    .get('[data-cy = book-list]')
    .contains('Book Edited from Cypress')
    // test Delete
    cy.get('[data-cy^ = link-to-delete-book-]')
    .last()
    .click()
    .get('[data-cy^ = link-to-visit-book-]')
    .last().should('not.contain.text','Book Edited from Cypress')





  })
})
