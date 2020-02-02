import * as types from '../constants/ActionTypes'

export const logIn = (username, password) => ({
  type: types.LOG_IN,
  username,
  password
})

export const loggedIn = () => ({
  type: types.LOGGED_IN
})

export const notLoggedIn = () => ({
  types: types.NOT_LOGGED_IN
})

export const logOut = () => ({
  type: types.LOG_OUT
})
