import { put, takeLatest } from 'redux-saga/effects'
import { loggedIn } from '../actions'
import { LOG_IN } from '../constants/ActionTypes'

function* logInUser(action) {
  console.log('logInUser', action)
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
    yield response.json().then(json => console.log('json', json))
  } else {
    yield put(loggedIn())
  }
}

export function* logInWatcher() {
  yield takeLatest(LOG_IN, logInUser)
}
