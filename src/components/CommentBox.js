import React, { useState } from 'react'
import { useStore } from 'hooks'
import { saveComment, loadComments } from 'actions'

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
    dispatch(loadComments(dispatch))
  }

  return (
    <div className="border-solid border-grey-darkest border-2 rounded-t-lg mt-4 shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
      >
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="comment"
          >
            Add a Comment
          </label>
          <textarea
            value={comment}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            placeholder="comment"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Comment
          </button>
          <button
            className="fetch-comments bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={fetchComments}
          >
            Fetch Comments
          </button>
        </div>
      </form>
    </div>
  )
}

export default CommentBox
