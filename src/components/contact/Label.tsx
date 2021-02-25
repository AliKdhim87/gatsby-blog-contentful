import React from 'react'
import {useTheme} from 'styled-components'
interface Props {
  text: string
  htmlForm: string
}

const Label: React.FC<Props> = ({text, htmlForm}: Props) => {
  const {textColor} = useTheme()
  return (
    <label
      style={{
        color: textColor,
      }}
      htmlFor={htmlForm}
    >
      {text}
    </label>
  )
}

export default Label
