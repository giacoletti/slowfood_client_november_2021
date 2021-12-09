// Arrange, Act, Assert

describe('Clicking on a "Add to Order" button for a second product', () => {

  before(() => {
    cy.intercept('GET', '**/api/products', {
      fixture: 'products.json'
    });
    cy.intercept('POST', '**/api/orders', {
      fixture: 'orderCreateResponse.json'
    }).as('Orders.create');

    cy.intercept('PUT', '**/api/orders', {
      fixture: 'orderUpdateResponse.json'
    }).as('Orders.update');
    cy.visit('/');

    cy.get('[data-cy=product-list]').children().first().within(() => {
      cy.get('button').click();
    });
    cy.get('[data-cy=product-list]').children().last().within(() => {
      cy.get('button').click();
    });
  });

  it('is expected to make a PUT request to the API', () => {
    cy.wait('@Orders.update').its('request.method').should('eq', 'PUT');
  });

  // trying chai assertions
  // it('is expected to include "product_id" and "order_id" in the request made to the API', () => {
  //   cy.wait('@Orders.update')
  //     .its('request.body')
  //     .should('have.property', 'product_id');
  // });

  it('is expected to render a message', () => {
    cy.get('[data-cy=message-box]').should(
      'contain.text',
      'Hamburger was added to your order!'
    );
  });
});
