import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'
import {
  createdNewQuiz,
  errorDuringCreatingNewQuiz,
  changedAvailability,
  savedQuestion,
  savedPicture,
  errorDuringSavingPicture
} from '../actions/new-quiz.actions'
import {
  CREATE_NEW_QUIZ,
  CHANGE_AVAILABILITY,
  SAVE_QUESTION,
  ADD_AND_SAVE_PICTURE
} from '../constants/new-quiz.action-types'

const getToken = state => state.auth.token

const getTitle = state => state.newQuiz.title
const getDescription = state => state.newQuiz.description

function* createNewQuiz() {
  const token = yield select(getToken)

  const title = yield select(getTitle)
  const description = yield select(getDescription)

  console.log(title, description)

  const url = 'http://localhost:3000/api/quizzes'

  try {
    const response = yield axios
      .post(
        url,
        {
          title,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => res)

    console.log(response)
    yield put(createdNewQuiz(response.data.id, response.data.available))
  } catch (error) {
    console.error(error)
    yield put(errorDuringCreatingNewQuiz())
  }
}

export function* createNewQuizWatcher() {
  yield takeLatest(CREATE_NEW_QUIZ, createNewQuiz)
}

const getNewQuizId = state => state.newQuiz.quizId

function* changeAvailability(action) {
  const token = yield select(getToken)
  const quizId = yield select(getNewQuizId)
  const available = action.isAvailable

  const url = `http://localhost:3000/api/quizzes/${quizId}/available`

  try {
    const response = yield axios
      .patch(
        url,
        {
          available
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => res)

    console.log(response)
    yield put(changedAvailability())
  } catch (error) {
    console.error(error)
  }
}

export function* changeAvailabilityWatcher() {
  yield takeLatest(CHANGE_AVAILABILITY, changeAvailability)
}

const getQuestions = state => state.newQuiz.questions

function* saveQuestion(action) {
  const token = yield select(getToken)
  const quizId = yield select(getNewQuizId)

  const { questionIndex } = action
  const question = (yield select(getQuestions))[questionIndex]

  console.log('saga', question)

  const url = `http://localhost:3000/api/quizzes/${quizId}/questions/`

  try {
    const response = yield axios
      .post(url, question, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res)

    console.log(response)
    yield put(savedQuestion(questionIndex, response.data.id))
  } catch (error) {
    console.error(error)
  }
}

export function* saveQuestionWatcher() {
  yield takeLatest(SAVE_QUESTION, saveQuestion)
}

function* savePicture(action) {
  const { questionIndex, picture } = action
  const url = 'http://localhost:3000/api/photos'

  const data = new FormData()
  data.append('file', picture)

  try {
    const res = yield axios.post(url, data).then(res => res)

    yield put(savedPicture(questionIndex, res.data.id))
  } catch (error) {
    yield put(errorDuringSavingPicture())
  }
}

export function* savePictureWatcher() {
  yield takeLatest(ADD_AND_SAVE_PICTURE, savePicture)
}
