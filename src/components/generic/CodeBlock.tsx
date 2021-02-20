import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  language?: string
  value: string
}

const CodeBlock: React.FC<Props> = ({language, value}: Props) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers useInlineStyles>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
