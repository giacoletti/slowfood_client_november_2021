describe('Clicking on "View Order"', () => {
  
  before(() => {
    cy.intercept('GET', '**/api/products', {
      fixture: 'products.json'
    });
    cy.intercept('POST', '**/api/orders', {
      fixture: 'orderCreateResponse.json'
    });
    cy.intercept('PUT', '**/api/orders/**', {
      fixture: 'orderUpdateResponse.json'
    });
    cy.visit('/');

    cy.get('[data-cy=product-list]').children().first().within(() => {
      cy.get('button').click();
    });
    cy.get('[data-cy=product-list]').children().last().within(() => {
      cy.get('button').click();
    });

    cy.get('[data-cy=view-order]').click();
  });

  it('is expected to display order details and hide product list', () => {
    cy.get('[data-cy=product-list]').should('not.exist');
    cy.get('[data-cy=order-details]').should('be.visible');
  });

  it('is expected to display product details', () => {
    cy.get('[data-cy=order-products]').children().should('have.length', 2);
  });

  it('is expected to display order total', () => {
    cy.get('[data-cy=order-total]').should('contain.text', '40 kr');
  });
});
