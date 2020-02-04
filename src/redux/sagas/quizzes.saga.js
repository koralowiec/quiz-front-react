import { takeLatest, put } from 'redux-saga/effects'
import { GET_QUIZZES } from '../constants/ActionTypes'
import { errorDuringGettingAllQuizzes, gotAllQuizzes } from '../actions'

function* getQuizzes() {
  const respone = yield fetch('http://localhost:3000/api/quizzes', {
    method: 'GET'
  })
    .then(respone => respone)
    .catch(e => console.error(e))

  if (respone.status !== 200) {
    yield put(errorDuringGettingAllQuizzes())
  } else {
    const quizzes = yield respone.json().then(json => json)
    yield put(gotAllQuizzes(quizzes))
  }
}

export function* getQuizzesWatcher() {
  yield takeLatest(GET_QUIZZES, getQuizzes)
}
