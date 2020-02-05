import * as types from '../constants/user-attempts.action-types'

export const userAttempts = (state = { attempts: [] }, action) => {
  switch (action.type) {
    case types.GOT_USER_ATTEMPTS:
      return { attempts: action.attempts }
    case types.ERROR_DURING_GETTING_USER_ATTEMPS:
      return { error: true }
    default:
      return state
  }
}
