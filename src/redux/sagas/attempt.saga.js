import { put, takeLatest, select } from 'redux-saga/effects'
import {
  MAKE_AN_ATTEMPT,
  GET_QUESTIONS_WITH_OPTIONS,
  ANSWER_THE_QUESTION,
  END_ATTEMPT,
  GET_FULL_RESULT_OF_ATTEMPT
} from '../constants/attempt.action-types'
import {
  madeTheAttempt,
  errorDuringMakingTheAttempt,
  gotQuestionsWithOptions,
  errorDuringGettingQuestionsWithOptios,
  getQuestionsWithOptions,
  errorDuringAnsweringTheQuestion,
  answeredTheQuestion,
  endedTheAttempt,
  errorDuringEndingTheAttempt,
  endTheAttempt,
  gotFullResultOfAttempt,
  errorDuringGettingFullResultOfAttempt,
  getFullResultOfTheAttempt
} from '../actions/attempt.actions'
import API from '../../utils/API'

const getToken = state => state.auth.token

function* createAnAttempt(action) {
  const { quizId } = action
  const token = yield select(getToken)

  const url = '/attempts/'

  try {
    const response = yield API.post(
      url,
      {
        quizId
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    ).then(res => res)

    yield put(madeTheAttempt(response.data))
    yield put(getQuestionsWithOptions())
  } catch (error) {
    console.error(error)
    yield put(errorDuringMakingTheAttempt())
  }
}

export function* createAnAttemptWatcher() {
  yield takeLatest(MAKE_AN_ATTEMPT, createAnAttempt)
}

const getQuizId = state => state.attempt.details.quizId

function* getQuestions() {
  const quizId = yield select(getQuizId)
  const url = `/quizzes/${quizId}/questions/`

  try {
    const response = yield API.get(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res)

    yield put(gotQuestionsWithOptions(response.data))
  } catch (error) {
    console.error(error)
    yield put(errorDuringGettingQuestionsWithOptios())
  }
}

export function* getQuestionsWatcher() {
  yield takeLatest(GET_QUESTIONS_WITH_OPTIONS, getQuestions)
}

const getAttemptId = state => state.attempt.details.id

function* answerQuestion(action) {
  const { questionId, checkedOptionIds } = action
  const checkedOptions = [...checkedOptionIds].map(optionId => {
    return {
      optionId: optionId
    }
  })
  const token = yield select(getToken)
  const attemptId = yield select(getAttemptId)
  const url = `/attempts/${attemptId}/answers`

  const body = {
    answer: {
      questionId: questionId
    },
    checkedOptions: checkedOptions
  }

  try {
    yield API.post(url, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res)

    yield put(answeredTheQuestion())
    const { isLastQuestion } = action
    if (isLastQuestion) {
      yield put(endTheAttempt())
    }
  } catch (error) {
    console.error(error)
    yield put(errorDuringAnsweringTheQuestion())
  }
}

export function* answerQuestionWatcher() {
  yield takeLatest(ANSWER_THE_QUESTION, answerQuestion)
}

function* endAttempt() {
  const token = yield select(getToken)
  const attemptId = yield select(getAttemptId)

  const url = `/attempts/${attemptId}/passed`

  try {
    const response = yield API.patch(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then(res => res)

    yield put(endedTheAttempt(response.data))
    yield put(getFullResultOfTheAttempt())
  } catch (error) {
    console.error(error)
    yield put(errorDuringEndingTheAttempt())
  }
}

export function* endAttemptWatcher() {
  yield takeLatest(END_ATTEMPT, endAttempt)
}

function* getFullResultOfAttempt() {
  const token = yield select(getToken)
  const attemptId = yield select(getAttemptId)

  const url = `/attempts/${attemptId}`

  try {
    const response = yield API.get(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => res)

    yield put(gotFullResultOfAttempt(response.data))
  } catch (error) {
    console.error(error)
    yield put(errorDuringGettingFullResultOfAttempt())
  }
}

export function* getFullResultOfAttemptWatcher() {
  yield takeLatest(GET_FULL_RESULT_OF_ATTEMPT, getFullResultOfAttempt)
}
