/// <reference types="cypress" />

describe('SearchMovie e2e', () => {
  it('should react on submit button', () => {
    const SEARCH_QUERY = 'test film';
    cy.visit('/main');

    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });

    cy.get('.search-movie-form__input').clear().type(SEARCH_QUERY);
    cy.get('.search-movie-form__submit').click();

    cy.get('@consoleLog').should('be.calledWith', SEARCH_QUERY);
  });
});
