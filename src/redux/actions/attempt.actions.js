import * as types from '../constants/attempt.action-types'

export const makeAnAttempt = quizId => ({
  type: types.MAKE_AN_ATTEMPT,
  quizId
})

export const madeTheAttempt = attempt => ({
  type: types.MADE_THE_ATTEMPT,
  attempt
})

export const errorDuringMakingTheAttempt = () => ({
  type: types.ERROR_DURING_MAKING_THE_ATTEMPT
})
