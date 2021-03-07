import React from 'react'
import renderer from 'react-test-renderer'

import {PureFooter as Footer} from '../footer'

describe('Footer', () => {
  it('renders correctly and select the dark', () => {
    const tree = renderer.create(<Footer author="Ali Amouri Kadhim" isDark={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly and select the light', () => {
    const tree = renderer.create(<Footer author="Ali Amouri Kadhim" isDark={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
