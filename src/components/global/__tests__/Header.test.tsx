import React from 'react'
import renderer from 'react-test-renderer'

import {lightTheme, darkTheme} from 'theme'

import {PureHeader as Header, links} from '../header'

jest.mock(
  'semantic-ui-react/dist/commonjs/behaviors/Visibility/Visibility',
  () => ({children}: {children: React.ReactNode}) => children,
)
jest.mock(
  'semantic-ui-react/dist/commonjs/modules/Sidebar/Sidebar',
  () => ({children}: {children: React.ReactNode}) => children,
)

jest.mock('@reach/router', () => ({
  useLocation: jest.fn().mockReturnValue({pathname: '/'}),
}))

describe('Header', () => {
  it('renders correctly and select the dark mode', () => {
    const tree = renderer
      .create(
        <Header
          brandName="ALI DEV"
          links={links}
          isDark={true}
          secondary={darkTheme.secondary}
          textColor={darkTheme.textColor}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly and select the light mode', () => {
    const tree = renderer
      .create(
        <Header
          brandName="ALI DEV"
          links={links}
          isDark={false}
          secondary={lightTheme.secondary}
          textColor={lightTheme.textColor}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
