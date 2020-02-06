import * as types from '../constants/attempt.action-types'

const initState = {}

export const attempt = (state = initState, action) => {
  switch (action.type) {
    case types.MAKE_AN_ATTEMPT:
      return Object.assign({}, state, {
        fullResult: false,
        creating: true,
        questions: []
      })
    case types.MADE_THE_ATTEMPT:
      return Object.assign({}, state, {
        details: action.attempt,
        creating: false
      })
    case types.ERROR_DURING_MAKING_THE_ATTEMPT:
      return { ...state, error: true }

    case types.GOT_QUESTIONS_WITH_OPTIONS: {
      return Object.assign({}, state, { questions: action.questions })
    }
    case types.ANSWERED_THE_QUESTION:
      return state
    case types.ERROR_DURING_ANSWERING_THE_QUESTION:
      return state
    case types.ENDED_ATTEMPT:
      return Object.assign({}, state, {
        details: action.details
      })
    case types.END_ATTEMPT:
      return Object.assign({}, state, { fullResult: false })
    case types.GOT_FULL_RESULT_OF_ATTEMPT:
      return Object.assign({}, state, { fullResult: action.fullResult })
    default:
      return state
  }
}
