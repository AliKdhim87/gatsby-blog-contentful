import React from 'react'
import renderer from 'react-test-renderer'

import {darkTheme, lightTheme} from 'theme'

import {PureFooter as Footer} from '../footer'

describe('Footer', () => {
  it('renders correctly and select the dark', () => {
    const tree = renderer
      .create(<Footer author="Ali Amouri Kadhim" color={darkTheme.textColor} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly and select the light', () => {
    const tree = renderer
      .create(<Footer author="Ali Amouri Kadhim" color={lightTheme.textColor} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
