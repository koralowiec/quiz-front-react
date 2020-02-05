import * as types from '../constants/ActionTypes'

export const createAnAccout = (username, password) => ({
  type: types.CREATE_AN_ACCOUNT,
  username,
  password
})

export const createdAnAccount = () => ({
  type: types.CREATED_AN_ACCOUNT
})

export const errorDuringCreatingAnAccount = error => ({
  type: types.ERROR_DURING_CREATING_AN_ACCOUNT,
  error
})
