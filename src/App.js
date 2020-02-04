import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import LoginPanelContainer from './containers/LoginPanelContainer'
import QuizzesListContainer from './containers/QuizzesListContainer'
import { Router, Link } from '@reach/router'
import QuestionPageContainer from './containers/QuestionPageContainer'
import AttemptResultContainer from './containers/AttemptResultContainer'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <div>Quizzes</div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </header>
        <Router>
          <QuizzesListContainer path="/" />
          <LoginPanelContainer path="/login" />
          <QuestionPageContainer path="/quiz" />
          <AttemptResultContainer path="/quiz/result" />
        </Router>
      </div>
    </Provider>
  )
}

render(<App />, document.getElementById('root'))
