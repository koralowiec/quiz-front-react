import { put, takeLatest } from 'redux-saga/effects'
import {
  errorDuringCreatingAnAccount,
  createdAnAccount
} from '../actions/signUp.action'
import { CREATE_AN_ACCOUNT } from '../constants/ActionTypes'

function* createAnAccount(action) {
  const { username, password } = action
  const url = 'http://localhost:3000/api/auth/signUp'
  const response = yield fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(r => r)

  if (response.status !== 201) {
    yield put(errorDuringCreatingAnAccount(response))
  } else {
    yield put(createdAnAccount())
  }
}

export function* createAnAccountWatcher() {
  yield takeLatest(CREATE_AN_ACCOUNT, createAnAccount)
}
