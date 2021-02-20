import React from 'react'
import {useTheme} from 'styled-components'

import {darkMode} from 'utils/darkMode'

interface Props {
  text: string
  htmlForm: string
}

const Label: React.FC<Props> = ({text, htmlForm}: Props) => {
  const {mode, colors} = useTheme()
  return (
    <label
      style={{
        color: darkMode(mode) ? colors.grey : colors.black,
      }}
      htmlFor={htmlForm}
    >
      {text}
    </label>
  )
}

export default Label
