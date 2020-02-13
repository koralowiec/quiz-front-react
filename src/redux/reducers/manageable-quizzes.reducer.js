import * as types from '../constants/manageable-quizzes.action-types'

export const manageableQuizzes = (state = { quizzes: [] }, action) => {
  switch (action.type) {
    case types.GET_MANAGEABLE_QUIZZES:
      return { ...state, loading: true }
    case types.GOT_MANAGEABLE_QUIZZES: {
      const { quizzes } = action
      return { ...state, quizzes }
    }
    case types.ERROR_DURING_GETTING_MANAGEABLE_QUIZZES:
      return { ...state, error: true }
    default:
      return state
  }
}
