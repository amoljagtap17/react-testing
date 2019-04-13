import React from 'react'
import { useStore } from 'hooks'

const CommentList = () => {
  const [{ comments }] = useStore()

  const renderComments = () =>
    comments.map(comment => <li key={comment}>{comment}</li>)

  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  )
}

export default CommentList
