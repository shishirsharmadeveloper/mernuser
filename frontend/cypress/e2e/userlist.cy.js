describe('userlist', () => {
    it('userlist', () => {
      cy.visit('http://localhost:3000/')
      cy.get('table').contains('td', 'Amit');
      cy.get('table').contains('td', 'kumar');
      cy.get('table').contains('td', 'amit@gmail.com');
    })
  })