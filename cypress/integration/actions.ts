/* eslint-disable jest/no-export */
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('Robot Actions', () => {
  it('Should Place Robot and Report', () => {
    cy.visit('localhost:3000');

    cy.get('[data-cy=input-box]').type('PLACE 0,0,NORTH');

    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').type('REPORT');

    cy.get('[data-cy=submit_button]').click();

    cy.get('.output-list').contains('0,0,NORTH');
  });
  it('Should Place Robot Outside Table and Report', () => {
    cy.visit('localhost:3000');

    cy.get('[data-cy=input-box]').type('PLACE 5,5,NORTH');

    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').type('REPORT');

    cy.get('[data-cy=submit_button]').click();

    cy.get('.output-list').should('not.contain', '5,5,NORTH');
  });
  it('FROM Example Input a', () => {
    cy.visit('localhost:3000');

    cy.get('[data-cy=input-box]').type('PLACE 0,0,NORTH');

    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').type('MOVE');

    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('REPORT');

    cy.get('[data-cy=submit_button]').click();

    cy.get('.output-list').should('contain', '0,1,NORTH');
  });

  it('FROM Example Input b', () => {
    cy.visit('localhost:3000');

    cy.get('[data-cy=input-box]').type('PLACE 0,0,NORTH');

    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').type('LEFT');

    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('REPORT');

    cy.get('[data-cy=submit_button]').click();

    cy.get('.output-list').should('contain', '0,0,WEST');
  });
  it('Displays Error on Invalid Command', () => {
    cy.visit('localhost:3000');

    cy.get('[data-cy=input-box]').type('PLACE 0,0,NORTH');

    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').type('LEFT1');

    cy.get('[data-cy=submit_button]').click();

    cy.get('.MuiFormHelperText-root').contains('Invalid Command');
  });

  it('should rotate 360 degrees Right and Report after every action', () => {
    cy.visit('localhost:3000');

    cy.get('[data-cy=input-box]').type('PLACE 0,0,NORTH');
    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').type('RIGHT');
    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('REPORT');
    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('RIGHT');
    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('REPORT');
    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('RIGHT');
    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('REPORT');
    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('RIGHT');
    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('REPORT');
    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('RIGHT');
    cy.get('[data-cy=submit_button]').click();

    cy.get('[data-cy=input-box]').clear().type('REPORT');
    cy.get('[data-cy=submit_button]').click();

    cy.get('.output-list')
      .find('li')
      .should('have.length', 5)
      .then(($els) => {
        return Cypress._.map(Cypress.$.makeArray($els), 'innerText');
      })
      .should('deep.equal', ['0,0,EAST', '0,0,SOUTH', '0,0,WEST', '0,0,NORTH', '0,0,EAST']);
  });
});

export {};
