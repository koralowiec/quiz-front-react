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

export const getQuestionsWithOptions = () => ({
  type: types.GET_QUESTIONS_WITH_OPTIONS
})

export const answerQuestion = (
  questionId,
  checkedOptionIds,
  isLastQuestion
) => ({
  type: types.ANSWER_THE_QUESTION,
  questionId,
  checkedOptionIds,
  isLastQuestion
})

export const answeredTheQuestion = () => ({
  type: types.ANSWERED_THE_QUESTION
})

export const errorDuringAnsweringTheQuestion = () => ({
  type: types.ERROR_DURING_ANSWERING_THE_QUESTION
})

export const gotQuestionsWithOptions = questions => ({
  type: types.GOT_QUESTIONS_WITH_OPTIONS,
  questions
})

export const errorDuringGettingQuestionsWithOptios = () => ({
  type: types.ERROR_DURING_GETTING_QUESTIONS_WITH_OPTIONS
})

export const endTheAttempt = () => ({
  type: types.END_ATTEMPT
})

export const endedTheAttempt = details => ({
  type: types.ENDED_ATTEMPT,
  details
})

export const errorDuringEndingTheAttempt = () => ({
  type: types.ERROR_DURING_ENDING_THE_ATTEMPT
})
