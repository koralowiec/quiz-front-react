import { put, takeLatest, select } from 'redux-saga/effects'
import { MAKE_AN_ATTEMPT } from '../constants/attempt.action-types'
import {
  madeTheAttempt,
  errorDuringMakingTheAttempt
} from '../actions/attempt.actions'

const getToken = state => state.auth.token

function* createAnAttempt(action) {
  const { quizId } = action
  const token = yield select(getToken)
  console.log('Make an Attempt token', token)
  const response = yield fetch('http://localhost:3000/api/attempts/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      quizId
    })
  }).then(r => r)

  if (response.status !== 201) {
    yield put(errorDuringMakingTheAttempt())
  } else {
    const madeAttempt = yield response.json().then(a => a)
    yield put(madeTheAttempt(madeAttempt))
  }

  console.log('attempt respone', response)
}

export function* createAnAttemptWatcher() {
  yield takeLatest(MAKE_AN_ATTEMPT, createAnAttempt)
}
