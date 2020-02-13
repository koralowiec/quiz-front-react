import { takeLatest, put, select } from 'redux-saga/effects'
import { GET_QUIZZES } from '../constants/ActionTypes'
import { errorDuringGettingAllQuizzes, gotAllQuizzes } from '../actions'
import API from '../../utils/API'

const getToken = state => state.auth.token

function* getQuizzes() {
  const token = yield select(getToken)

  const url = '/quizzes?onlyAvailable=true'

  try {
    const response = yield API.get(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res)

    yield put(gotAllQuizzes(response.data))
  } catch (error) {
    console.error(error)
    yield put(errorDuringGettingAllQuizzes())
  }
}

export function* getQuizzesWatcher() {
  yield takeLatest(GET_QUIZZES, getQuizzes)
}
