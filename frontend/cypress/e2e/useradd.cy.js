describe('useradd', () => {

    it('checkvalidation', () => {
      cy.visit('http://localhost:3000/userregister')
      cy.wait(2000);
      cy.get('button').click();
    })

    it('submitform', () => {
        cy.visit('http://localhost:3000/userregister')
        cy.wait(2000);
        cy.get("#firstname").type("Rakesh");
        cy.get("#lastname").type("sharma");
        cy.get("#email").type("rakesh@gmail.com");
        cy.wait(2000);
        cy.get('button').click();
    })

  })