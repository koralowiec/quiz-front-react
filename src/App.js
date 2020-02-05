import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import LoginPanelContainer from './containers/LoginPanelContainer'
import QuizzesListContainer from './containers/QuizzesListContainer'
import { Router } from '@reach/router'
import QuestionPageContainer from './containers/QuestionPageContainer'
import AttemptResultContainer from './containers/AttemptResultContainer'
import './App.css'
import HeaderContainer from './containers/HeaderContainer'
import FooterContainer from './containers/FooterContainer'
import SignUpPanelContainer from './containers/SignUpPanelContainer'

const App = () => {
  return (
    <Provider store={store}>
      <div id="App">
        <HeaderContainer />
        <Router>
          <QuizzesListContainer path="/" />
          <LoginPanelContainer path="/login" />
          <SignUpPanelContainer path="/signup" />
          <QuestionPageContainer path="/quiz" />
          <AttemptResultContainer path="/quiz/result" />
        </Router>
        <FooterContainer />
      </div>
    </Provider>
  )
}

render(<App />, document.getElementById('root'))
