/// <reference types="cypress" />

describe('Header e2e', () => {
  it('should display "Add Movie" button', () => {
    cy.visit('/');

    cy.get('.header-button')
      .should('exist')
      .should('have.text', 'add movie')
      .click();
  });

  it('Should display "Netflix Roulette" logo link and reload page after clicking', () => {
    cy.visit('/main');

    cy.get('.Header').should('exist');

    cy.get('.header-logo')
      .should('exist')
      .should('have.text', 'netflixroulette')
      .should('have.attr', 'href', '/');

    cy.get('.header-logo').click();

    // TODO: change string with baseUrl
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.Main').should('not.exist');
  });
});
