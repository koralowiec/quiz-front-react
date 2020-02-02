import * as types from '../constants/ActionTypes'

export const getAllQuizzes = () => ({
  type: types.GET_QUIZZES
})

export const gotAllQuizzes = quizzes => ({
  type: types.GOT_QUIZZES,
  quizzes
})

export const errorDuringGettingAllQuizzes = () => ({
  type: types.ERROR_DURING_GETTING_QUIZZES
})
