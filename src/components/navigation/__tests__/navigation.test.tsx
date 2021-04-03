import React from 'react'
import { mount } from 'enzyme'
import Link from 'next/link'

import { Navigation } from '..'

describe('Navigation', () => {
  it('renders Link', () => {
    const wrapper = mount(<Navigation />)
    expect(wrapper.find(Link).first().prop('href')).toStrictEqual('/')
  })
})
