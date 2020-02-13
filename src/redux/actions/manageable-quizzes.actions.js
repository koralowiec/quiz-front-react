import * as types from '../constants/manageable-quizzes.action-types'

export const getManageableQuizzes = () => ({
  type: types.GET_MANAGEABLE_QUIZZES
})

export const gotManageableQuizzes = quizzes => ({
  type: types.GOT_MANAGEABLE_QUIZZES,
  quizzes
})

export const errorDuringGettingManageableQuizzes = () => ({
  type: types.ERROR_DURING_GETTING_MANAGEABLE_QUIZZES
})
