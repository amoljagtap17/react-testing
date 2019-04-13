import { SAVE_COMMENT, LOAD_COMMENTS } from 'actions/types'
import jsonplaceholderAPI from 'apis/jsonplaceholderAPI'

const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

const loadComments = async dispatch => {
  const fetchedComments = await jsonplaceholderAPI.get('/comments')

  dispatch({
    type: LOAD_COMMENTS,
    payload: fetchedComments
  })
}

export { saveComment, loadComments }
