import { all } from 'redux-saga/effects'
import { logInWatcher } from './auth.saga'

export default function* rootSaga() {
  yield all([logInWatcher()])
}
