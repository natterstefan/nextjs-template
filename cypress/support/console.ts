/**
 * Spy on both error and warn console.logs to detect if an error has been
 * written to the console
 *
 * inspired by
 * - @see https://stackoverflow.com/a/63794694/1238150
 *
 * Docs
 * - @see https://docs.cypress.io/faq/questions/using-cypress-faq#How-do-I-spy-on-console-log
 * - @see https://github.com/cypress-io/cypress-example-recipes/blob/46900c4c5085f8d2c6094cd644ca842b36315de2/examples/stubbing-spying__window/cypress/integration/spy-before-load.js#L4-L13
 */
Cypress.on('window:before:load', win => {
  cy.spy(win.console, 'error')
  cy.spy(win.console, 'warn')
})
