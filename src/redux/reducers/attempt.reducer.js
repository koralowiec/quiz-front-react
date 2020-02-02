import * as types from '../constants/attempt.action-types'

export const attempt = (state = {}, action) => {
  switch (action.type) {
    case types.MAKE_AN_ATTEMPT:
      return {
        creating: true
      }
    case types.MADE_THE_ATTEMPT:
      console.log('r', action)
      return { attempt: action.attempt }
    case types.ERROR_DURING_MAKING_THE_ATTEMPT:
      return { error: true }
    default:
      return state
  }
}
