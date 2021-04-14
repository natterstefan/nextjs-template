/**
 * TODO: document when and how to use reference types
 * TODO: or try https://github.com/cypress-io/cypress/issues/1152#issuecomment-509729392
 */
/// <reference types="../../support" />

/**
 * inspired by
 * - @see https://www.cypress.io/blog/2020/12/10/testing-the-anchor-links/
 */
context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should contain a link to the English Homepage', () => {
    cy.getBySel('home-links')
      .get('li a')
      .first()
      .then($elem => {
        expect($elem.text()).to.contain('Home English')
        expect($elem).to.have.attr('href', '/')
      })
  })

  it('should contain a link to the German Homepage', () => {
    cy.getBySel('home-links')
      .get('li a')
      .eq(1)
      .then($elem => {
        expect($elem.text()).to.contain('Home German')
        expect($elem).to.have.attr('href', '/de')
      })
  })
})
