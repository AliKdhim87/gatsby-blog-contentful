import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus, duotoneLight} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {useTheme} from 'styled-components'

interface Props {
  language?: string
  value: string
}

const CodeBlock: React.FC<Props> = ({language, value}: Props) => {
  const {isDark} = useTheme()
  return (
    <SyntaxHighlighter
      language={language}
      style={isDark ? vscDarkPlus : duotoneLight}
      showLineNumbers
      useInlineStyles
    >
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
