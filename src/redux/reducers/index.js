import { combineReducers } from 'redux'
import { auth } from './auth.reducer'
import { quizzes } from './quizzes.reducer'
import { attempt } from './attempt.reducer'
import { signUp } from './signUp.reducer'
import { userAttempts } from './user-attempts.reducer'
import { manageableQuizzes } from './manageable-quizzes.reducer'
import { newQuiz } from './new-quiz.reducer'
import { LOG_OUT } from '../constants/ActionTypes'
import storage from 'redux-persist/lib/storage'

const appReducer = combineReducers({
  auth,
  quizzes,
  attempt,
  signUp,
  userAttempts,
  manageableQuizzes,
  newQuiz
})

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    storage.removeItem('persist:root')
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
