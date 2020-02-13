import * as types from '../constants/ActionTypes'

export const auth = (state = {}, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return Object.assign({}, state, { username: action.username })
    case types.LOGGED_IN:
      return Object.assign({}, state, {
        logged: true,
        token: action.token,
        userRole: action.userRole
      })
    case types.NOT_LOGGED_IN:
      return { logged: false, error: true }
    case types.LOG_OUT:
      return { logged: false }
    default:
      return state
  }
}
