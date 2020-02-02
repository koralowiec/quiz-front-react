import * as types from '../constants/ActionTypes'

export const quizzes = (state = { quizzes: [] }, action) => {
  switch (action.type) {
    case types.GET_QUIZZES:
      return Object.assign({}, state, { loading: true })
    case types.GOT_QUIZZES:
      console.log('r', action.quizzes)
      return {
        quizzes: action.quizzes,
        loading: false
      }
    default:
      return state
  }
}
