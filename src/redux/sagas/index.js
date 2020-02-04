import { all } from 'redux-saga/effects'
import { logInWatcher } from './auth.saga'
import { getQuizzesWatcher } from './quizzes.saga'
import {
  createAnAttemptWatcher,
  getQuestionsWatcher,
  answerQuestionWatcher,
  endAttemptWatcher
} from './attempt.saga'

export default function* rootSaga() {
  yield all([
    logInWatcher(),
    getQuizzesWatcher(),
    createAnAttemptWatcher(),
    getQuestionsWatcher(),
    answerQuestionWatcher(),
    endAttemptWatcher()
  ])
}
