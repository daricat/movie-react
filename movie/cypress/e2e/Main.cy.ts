/// <reference types="cypress" />

describe('Main e2e', () => {
  it('Page should have header, search, genres components', () => {
    cy.visit('/main');

    const mainComponentsSelector = ['.Header', '.search-movie-form', '.genres'];

    mainComponentsSelector.forEach((componentSelector) => {
      cy.get(componentSelector).should('exist');
    });
  });
});
