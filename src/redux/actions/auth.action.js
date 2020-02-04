import * as types from '../constants/ActionTypes'

export const logIn = (username, password) => ({
  type: types.LOG_IN,
  username,
  password
})

export const loggedIn = token => ({
  type: types.LOGGED_IN,
  token
})

export const notLoggedIn = () => ({
  type: types.NOT_LOGGED_IN
})

export const logOut = () => ({
  type: types.LOG_OUT
})
