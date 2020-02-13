import { put, takeLatest } from 'redux-saga/effects'
import { loggedIn, notLoggedIn } from '../actions'
import { LOG_IN } from '../constants/ActionTypes'
import API from '../../utils/API'

function* logInUser(action) {
  const { username, password } = action

  const url = '/auth/signIn'

  try {
    const response = yield API.post(
      url,
      { username, password },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    ).then(res => res)

    const { token, role } = response.data
    yield put(loggedIn(token, role))
  } catch (error) {
    console.error(error)
    yield put(notLoggedIn())
  }
}

export function* logInWatcher() {
  yield takeLatest(LOG_IN, logInUser)
}
