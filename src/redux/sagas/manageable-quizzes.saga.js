import { select, takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_MANAGEABLE_QUIZZES } from '../constants/manageable-quizzes.action-types'
import {
  gotManageableQuizzes,
  errorDuringGettingManageableQuizzes
} from '../actions/manageable-quizzes.actions'

const getToken = state => state.auth.token

function* getManageableQuizzes() {
  const token = yield select(getToken)
  const url = 'http://localhost:3000/api/quizzes?ownerablility=true'
  const response = yield axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response)

  console.log('getManageableQuizzes()', response)

  if (response.status === 200) {
    yield put(gotManageableQuizzes(response.data))
  } else {
    yield put(errorDuringGettingManageableQuizzes())
  }
}

export function* getManageableQuizzesWatcher() {
  yield takeLatest(GET_MANAGEABLE_QUIZZES, getManageableQuizzes)
}
