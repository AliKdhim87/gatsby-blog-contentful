import React, {LegacyRef} from 'react'

interface Props {
  commentBox: LegacyRef<HTMLDivElement> | undefined
}

const Comment: React.FC<Props> = ({commentBox}: Props) => (
  <div ref={commentBox} className="comments"></div>
)
export default Comment
