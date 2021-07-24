import React from 'react'
import { mount } from 'enzyme'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { mockNextUseRouter } from '@/jest.setup'

import { Navigation } from '..'

describe('Navigation', () => {
  beforeAll(() => {
    mockNextUseRouter()
  })

  it('renders Link', () => {
    const wrapper = mount(<Navigation />)
    expect(wrapper.find(Link).first().text()).toStrictEqual('common:home')
    expect(wrapper.find(Link).first().prop('href')).toStrictEqual('/')
  })

  it('renders link to German home page', () => {
    const wrapper = mount(<Navigation />)

    const germanLink = wrapper.find(Link).at(1)
    germanLink.simulate('click')

    expect(useRouter().push).toHaveBeenCalledWith('/', '/', {
      locale: 'de',
      scroll: undefined,
      shallow: undefined,
    })
  })
})
