/* eslint-disable no-undef */
describe('Clicking "Add to order" button for a specific product', () => {
  before(() => {
    cy.intercept("GET", "**/api/products", { fixture: "products.json" });
    cy.intercept("POST", "**/api/orders", {
      fixture: "orderCreateResponse.json",
    }).as("Orders.create");
    cy.visit("/");
    cy.get("[data-cy=product-list]")
      .children()
      .first()
      .within(() => {
        cy.get("button").click();
      });
  });

  it("is expected to make a POST request", () => {
    cy.wait("@Orders.create").its("request.method").should("eq", "POST");
  });
});
