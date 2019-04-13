import { SAVE_COMMENT } from 'actions/types'

const commentsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload]
    default:
      return state
  }
}

export default commentsReducer
