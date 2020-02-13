import { takeLatest, put, select } from 'redux-saga/effects'
import { GET_QUIZZES } from '../constants/ActionTypes'
import { errorDuringGettingAllQuizzes, gotAllQuizzes } from '../actions'

const getToken = state => state.auth.token

function* getQuizzes() {
  const token = yield select(getToken)

  const respone = yield fetch(
    'http://localhost:3000/api/quizzes?onlyAvailable=true',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  )
    .then(respone => respone)
    .catch(e => console.error(e))

  if (respone.status !== 200) {
    console.error(respone)
    yield put(errorDuringGettingAllQuizzes())
  } else {
    const quizzes = yield respone.json().then(json => json)
    yield put(gotAllQuizzes(quizzes))
  }
}

export function* getQuizzesWatcher() {
  yield takeLatest(GET_QUIZZES, getQuizzes)
}
