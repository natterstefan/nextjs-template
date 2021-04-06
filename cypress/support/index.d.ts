/* eslint-disable @typescript-eslint/naming-convention */
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Select and add product to Cart
     * @example
     * cy.selectProduct(productName, size , color)
     */
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.getBySel('greeting')
     */
    getBySel(value: string): Chainable<Subject>
    getBySelLike(value: string): Chainable<Subject>
  }
}
