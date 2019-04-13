import { SAVE_COMMENT, LOAD_COMMENTS } from 'actions/types'

const commentsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload]
    case LOAD_COMMENTS:
      const comments = payload.data.map(comment => comment.name)
      return [...state, ...comments]
    default:
      return state
  }
}

export default commentsReducer
