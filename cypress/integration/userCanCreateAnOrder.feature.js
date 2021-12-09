// Arrange, Act, Assert

describe('Clicking on a "Add to Order" button for a specific product', () => {

  before(() => {
    cy.intercept('GET', '**/api/products', {
      fixture: 'products.json'
    });
    cy.intercept('POST', '**/api/orders', {
      fixture: 'orderCreateResponse.json'
    }).as('Orders.create');
    cy.visit('/');
    cy.get('[data-cy=product-list]').children().first().within(() => {
      cy.get('button').click();
    });
  });

  it('is expected to make a POST request to the API', () => {
    cy.wait('@Orders.create').its('request.method').should('eq', 'POST');
  });

  it('is expected to render a message', () => {

  });
});