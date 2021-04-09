/**
 * inspired by
 * @see https://blog.logrocket.com/testing-and-error-handling-patterns-in-next-js/
 *
 * Docs
 * @see https://docs.cypress.io/api/commands/request#Method-and-URL
 */
describe('Probe Status', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('confirms that the app is running', () => {
    return cy.request('GET', 'api/probe-status').then(response => {
      expect(response.status).to.eq(200)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
      expect(response.body).to.eq('OK')
    })
  })
})
