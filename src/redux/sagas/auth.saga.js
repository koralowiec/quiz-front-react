import { put, takeLatest } from 'redux-saga/effects'
import { loggedIn, notLoggedIn } from '../actions'
import { LOG_IN } from '../constants/ActionTypes'

function* logInUser(action) {
  const { username, password } = action
  const response = yield fetch('http://localhost:3000/api/auth/signIn', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(response => response)

  if (response.status !== 201) {
    yield put(notLoggedIn())
  } else {
    const json = yield response.json().then(json => json)
    const { token, role } = json
    yield put(loggedIn(token, role))
  }
}

export function* logInWatcher() {
  yield takeLatest(LOG_IN, logInUser)
}
