/* eslint-disable jest/no-export */
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('Navigates to site', () => {
  it('Should have all major components', () => {
    cy.visit('localhost:3000');

    cy.get('[data-cy=mr-yum-link]').should('be.visible');

    cy.get('[data-cy=input-box]').should('be.visible');

    cy.get('[data-cy=submit_button]').should('be.visible');

    cy.get('.output-list').should('be.visible');

    cy.get('canvas').should('be.visible');
  });

  it('Logo should reference Mr Yum website', () => {
    cy.visit('localhost:3000');
    cy.get('[data-cy=mr-yum-link]').invoke('attr', 'href').should('eq', 'https://www.mryum.com/');
  });
});

export {};
