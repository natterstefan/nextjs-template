/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { mount } from '@cypress/react'

import { Standard } from '../__stories__/Navigation.stories'

it('Renders page component', () => {
  mount(<Standard {...Standard.args} />)
  cy.contains('Tailwind Docs')
})
