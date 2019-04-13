import React, { useState } from 'react'
import { useStore } from 'hooks'
import { saveComment, loadComments } from 'actions'
import jsonplaceholderAPI from 'apis/jsonplaceholderAPI'

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

  const fetchComments = async () => {
    const fetchedComments = await jsonplaceholderAPI.get('/comments')
    dispatch(loadComments(fetchedComments))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button onClick={fetchComments}>Fetch Comments</button>
    </div>
  )
}

export default CommentBox
