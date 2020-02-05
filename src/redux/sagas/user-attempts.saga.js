import { put, takeLatest, select } from 'redux-saga/effects'
import {
  errorDuringGettingUserAttempts,
  gotUserAttempts
} from '../actions/user-attemps.actions'
import { GET_USER_ATTEMPTS } from '../constants/user-attempts.action-types'

const getToken = state => state.auth.token

function* getUserAttempts() {
  const token = yield select(getToken)
  const url = 'http://localhost:3000/api/attempts/'
  const response = yield fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(r => r)

  if (response.status !== 200) {
    console.error('err', response)
    yield put(errorDuringGettingUserAttempts())
  } else {
    const attempts = yield response.json().then(j => j)
    yield put(gotUserAttempts(attempts))
  }
}

export function* getUserAttemptsWatcher() {
  yield takeLatest(GET_USER_ATTEMPTS, getUserAttempts)
}
