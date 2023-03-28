/// <reference types="cypress" />

describe('Genres e2e', () => {
  it('displays the genre menu', () => {
    cy.visit('/main');

    cy.get('.genres-menu').should('exist').find('.ant-menu-item');
  });
});
