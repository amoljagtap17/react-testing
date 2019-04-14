import React from 'react'
import { useStore } from 'hooks'

const CommentList = () => {
  const [{ comments }] = useStore()

  const renderComments = () =>
    comments.map(comment => (
      <li
        key={comment}
        className="text-center leading-loose text-xl text-grey-darkest bg-grey m-2 p-1 rounded-r-lg"
      >
        {comment}
      </li>
    ))

  return (
    <div className="border-solid border-teal-darkest border-2 rounded-t-lg mt-4 shadow-lg">
      <ul className="list-reset">{renderComments()}</ul>
    </div>
  )
}

export default CommentList
