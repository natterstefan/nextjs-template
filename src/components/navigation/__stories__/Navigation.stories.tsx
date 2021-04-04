import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Navigation } from '../Navigation'

export default {
  title: 'Components/Navigation',
  component: Navigation,
} as Meta

const Template: Story = args => <Navigation {...args} />

export const Standard: Story = Template.bind({})
Standard.args = {}
