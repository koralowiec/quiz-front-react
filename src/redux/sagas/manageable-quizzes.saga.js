import { select, takeLatest, put } from 'redux-saga/effects'
import { GET_MANAGEABLE_QUIZZES } from '../constants/manageable-quizzes.action-types'
import {
  gotManageableQuizzes,
  errorDuringGettingManageableQuizzes
} from '../actions/manageable-quizzes.actions'
import API from '../../utils/API'

const getToken = state => state.auth.token

function* getManageableQuizzes() {
  const token = yield select(getToken)
  const url = '/quizzes?ownerablility=true'

  try {
    const response = yield API.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => response)
    yield put(gotManageableQuizzes(response.data))
  } catch (error) {
    yield put(errorDuringGettingManageableQuizzes())
  }
}

export function* getManageableQuizzesWatcher() {
  yield takeLatest(GET_MANAGEABLE_QUIZZES, getManageableQuizzes)
}
