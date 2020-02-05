import * as types from '../constants/ActionTypes'

export const signUp = (state = {}, action) => {
  switch (action.type) {
    case types.CREATED_AN_ACCOUNT:
      return { created: true }
    case types.ERROR_DURING_CREATING_AN_ACCOUNT:
      return { created: false, signUpError: true, error: action.error }
    default:
      return state
  }
}
