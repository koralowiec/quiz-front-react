import { put, takeLatest, select } from 'redux-saga/effects'
import {
  errorDuringGettingUserAttempts,
  gotUserAttempts
} from '../actions/user-attemps.actions'
import { GET_USER_ATTEMPTS } from '../constants/user-attempts.action-types'
import API from '../../utils/API'

const getToken = state => state.auth.token

function* getUserAttempts() {
  const token = yield select(getToken)
  const url = '/attempts/'

  try {
    const response = yield API.get(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res)

    yield put(gotUserAttempts(response.data))
  } catch (error) {
    console.error(error)
    yield put(errorDuringGettingUserAttempts())
  }
}

export function* getUserAttemptsWatcher() {
  yield takeLatest(GET_USER_ATTEMPTS, getUserAttempts)
}
