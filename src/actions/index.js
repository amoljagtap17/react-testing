import { SAVE_COMMENT, LOAD_COMMENTS } from 'actions/types'

const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

const loadComments = comments => {
  return {
    type: LOAD_COMMENTS,
    payload: comments
  }
}

export { saveComment, loadComments }
