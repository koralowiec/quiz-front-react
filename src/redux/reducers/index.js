import { combineReducers } from 'redux'
import { auth } from './auth.reducer'
import { quizzes } from './quizzes.reducer'
import { attempt } from './attempt.reducer'
import { signUp } from './signUp.reducer'

export default combineReducers({ auth, quizzes, attempt, signUp })
