import React from 'react'
import { Story, Meta } from '@storybook/react'

import IndexPage from '@/pages/index'

export default {
  title: 'Pages',
  component: IndexPage,
} as Meta

const Template: Story = args => <IndexPage {...args} />

export const Home: Story = Template.bind({})
Home.args = {}
