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

const getToken = state => state.auth.token

function* createAnAttempt(action) {
  const { quizId } = action
  const token = yield select(getToken)
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
    yield put(getQuestionsWithOptions())
  }
}

export function* createAnAttemptWatcher() {
  yield takeLatest(MAKE_AN_ATTEMPT, createAnAttempt)
}

const getQuizId = state => state.attempt.details.quizId

function* getQuestions() {
  const quizId = yield select(getQuizId)
  const url = `http://localhost:3000/api/quizzes/${quizId}/questions/`
  const response = yield fetch(url).then(r => r)

  if (response.status !== 200) {
    console.log('err')
    yield put(errorDuringGettingQuestionsWithOptios())
  } else {
    const questions = yield response.json(q => q)
    yield put(gotQuestionsWithOptions(questions))
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
  const url = `http://localhost:3000/api/attempts/${attemptId}/answers`
  const body = JSON.stringify({
    answer: {
      questionId: questionId
    },
    checkedOptions: checkedOptions
  })

  const response = yield fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: body
  }).then(r => r)

  if (response.status !== 201) {
    console.log('err', response)
    yield put(errorDuringAnsweringTheQuestion())
  } else {
    yield put(answeredTheQuestion())
    const { isLastQuestion } = action
    if (isLastQuestion) {
      yield put(endTheAttempt())
    }
  }
}

export function* answerQuestionWatcher() {
  yield takeLatest(ANSWER_THE_QUESTION, answerQuestion)
}

function* endAttempt() {
  const token = yield select(getToken)
  const attemptId = yield select(getAttemptId)

  const url = `http://localhost:3000/api/attempts/${attemptId}/passed`
  const response = yield fetch(url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(r => r)

  if (response.status === 200) {
    const details = yield response.json().then(j => j)
    yield put(endedTheAttempt(details))
    yield put(getFullResultOfTheAttempt())
  } else {
    console.log('err')
    yield put(errorDuringEndingTheAttempt())
  }
}

export function* endAttemptWatcher() {
  yield takeLatest(END_ATTEMPT, endAttempt)
}

function* getFullResultOfAttempt() {
  const token = yield select(getToken)
  const attemptId = yield select(getAttemptId)

  const url = `http://localhost:3000/api/attempts/${attemptId}`
  const response = yield fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(r => r)

  if (response.status === 200) {
    const result = yield response.json().then(r => r)
    yield put(gotFullResultOfAttempt(result))
  } else {
    console.log('err')
    yield put(errorDuringGettingFullResultOfAttempt())
  }
}

export function* getFullResultOfAttemptWatcher() {
  yield takeLatest(GET_FULL_RESULT_OF_ATTEMPT, getFullResultOfAttempt)
}
