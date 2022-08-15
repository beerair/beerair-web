describe('Move Page', () => {
  it('Move Search Page', () => {
    cy.visit('/search');

    cy.wait(100);

    cy.location('href').should('contain', '/search');
  });
});

export {};
