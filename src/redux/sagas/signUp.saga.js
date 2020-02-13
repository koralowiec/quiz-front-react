import { put, takeLatest } from 'redux-saga/effects'
import {
  errorDuringCreatingAnAccount,
  createdAnAccount
} from '../actions/signUp.action'
import { CREATE_AN_ACCOUNT } from '../constants/ActionTypes'
import API from '../../utils/API'

function* createAnAccount(action) {
  const { username, password } = action
  const url = '/auth/signUp'

  try {
    yield API.post(
      url,
      { username, password },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    ).then(res => res)

    yield put(createdAnAccount())
  } catch (error) {
    console.error(error)
    yield put(errorDuringCreatingAnAccount(error))
  }
}

export function* createAnAccountWatcher() {
  yield takeLatest(CREATE_AN_ACCOUNT, createAnAccount)
}
