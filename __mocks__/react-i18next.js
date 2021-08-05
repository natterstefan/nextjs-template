/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/display-name */
/* eslint-disable no-confusing-arrow */

/**
 * Setup i18n in tests
 *
 * Docs
 * @see https://react.i18next.com/misc/testing
 *
 * Inspired by
 * @see https://github.com/i18next/react-i18next/blob/552ed79036c28f282afe7c6ccb525b82b76e71d5/example/test-jest/src/__mocks__/react-i18next.js
 *
 * Alternative examples using `i18n.use()...`
 * @see https://github.com/i18next/react-i18next/blob/552ed79036c28f282afe7c6ccb525b82b76e71d5/example/test-jest/src/setupTests.js#L4-L23
 * @see https://github.com/i18next/react-i18next/blob/552ed79036c28f282afe7c6ccb525b82b76e71d5/test/i18n.js
 * @see https://github.com/isaachinman/next-i18next/issues/377#issuecomment-700516821
 */

const React = require('react')
const reactI18next = require('react-i18next')

const hasChildren = node =>
  node && (node.children || (node.props && node.props.children))

const getChildren = node =>
  node && node.children ? node.children : node.props && node.props.children

const renderNodes = reactNodes => {
  if (typeof reactNodes === 'string') {
    return reactNodes
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key]
    const isElement = React.isValidElement(child)

    if (typeof child === 'string') {
      return child
    }
    if (hasChildren(child)) {
      const inner = renderNodes(getChildren(child))
      return React.cloneElement(child, { ...child.props, key: i }, inner)
    }
    if (typeof child === 'object' && !isElement) {
      return Object.keys(child).reduce(
        (str, childKey) => `${str}${child[childKey]}`,
        '',
      )
    }

    return child
  })
}

/**
 * @type any
 */
const useMock = [k => k, {}]
useMock.t = k => k
useMock.i18n = {}

module.exports = {
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => Component => props => (
    <Component t={k => k} {...props} />
  ),
  Trans: ({ children }) =>
    Array.isArray(children) ? renderNodes(children) : renderNodes([children]),
  Translation: ({ children }) => children(k => k, { i18n: {} }),
  useTranslation: () => useMock,

  // mock if needed
  I18nextProvider: reactI18next.I18nextProvider,
  initReactI18next: reactI18next.initReactI18next,
  setDefaults: reactI18next.setDefaults,
  getDefaults: reactI18next.getDefaults,
  setI18n: reactI18next.setI18n,
  getI18n: reactI18next.getI18n,
}
