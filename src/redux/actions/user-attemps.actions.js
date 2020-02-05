import * as types from '../constants/user-attempts.action-types'

export const getUserAttempts = () => ({
  type: types.GET_USER_ATTEMPTS
})

export const gotUserAttempts = attempts => ({
  type: types.GOT_USER_ATTEMPTS,
  attempts
})

export const errorDuringGettingUserAttempts = () => ({
  type: types.ERROR_DURING_GETTING_USER_ATTEMPS
})
