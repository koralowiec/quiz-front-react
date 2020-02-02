import { combineReducers } from 'redux'
import { auth } from './auth.reducer'
import { quizzes } from './quizzes.reducer'
import { attempt } from './attempt.reducer'

export default combineReducers({ auth, quizzes, attempt })
