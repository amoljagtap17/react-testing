import React, { useState } from 'react'
import { useStore } from 'hooks'
import { saveComment } from 'actions'

const CommentBox = () => {
  const [comment, setComment] = useState('')
  const [, dispatch] = useStore()

  const handleChange = event => {
    setComment(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(saveComment(comment))
    setComment('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea value={comment} onChange={handleChange} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  )
}

export default CommentBox
