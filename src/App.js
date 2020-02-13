import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import LoginPanelContainer from './containers/LoginPanelContainer'
import QuizzesListContainer from './containers/QuizzesListContainer'
import { Router } from '@reach/router'
import QuestionPageContainer from './containers/QuestionPageContainer'
import AttemptResultContainer from './containers/AttemptResultContainer'
import './App.css'
import HeaderContainer from './containers/HeaderContainer'
import FooterContainer from './containers/FooterContainer'
import SignUpPanelContainer from './containers/SignUpPanelContainer'
import UserInfoContainer from './containers/UserInfoContainer'
import ManageQuizzesContainer from './containers/ManageQuizzesContainer'
import { PersistGate } from 'redux-persist/integration/react'
import AddNewQuizContainer from './containers/add-new-quiz/AddNewQuizContainer'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div id="App">
          <HeaderContainer />
          <Router>
            <QuizzesListContainer path="/" />
            <LoginPanelContainer path="/login" />
            <SignUpPanelContainer path="/signup" />
            <QuestionPageContainer path="/quiz" />
            <AttemptResultContainer path="/quiz/result" />
            <UserInfoContainer path="/info" />
            <ManageQuizzesContainer path="/manage-your-quizzes" />
            <AddNewQuizContainer path="/add-new-quiz" />
          </Router>
          <FooterContainer />
        </div>
      </PersistGate>
    </Provider>
  )
}

render(<App />, document.getElementById('root'))
