// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/**
 * ATTENTION: does not work yet!
 *
 * In order to use styles in component tests, we have to import the generated
 * tailwind.css file here. Next's webpack config will not allow adding *.css
 * files on component level, except for CSS Modules (which we don't use).
 *
 * inspired by
 * @see https://github.com/cypress-io/cypress/issues/16879#issuecomment-861039210
 *
 * Further reading material
 * @see https://nextjs.org/docs/messages/css-global
 */
import '../../dist/cypress.css'

import './commands'
import './console'
