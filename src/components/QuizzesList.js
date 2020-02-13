import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import QuizzesListElement from './QuizzesListElement'
import './QuizzesList.css'

const QuizzesList = ({
  quizzes,
  loading,
  getQuizzes,
  textOfElementsLeftButton,
  pathToOfElementsLeftButton,
  onElementLeftButtonClicked
}) => {
  const listOfElements = quizzes.map((quiz, index) => (
    <QuizzesListElement
      key={index}
      quiz={quiz}
      onButtonOnLeftClicked={quizId => {
        onElementLeftButtonClicked(quizId)
      }}
      leftButtonText={textOfElementsLeftButton}
      leftButtonLinkPath={pathToOfElementsLeftButton}
    />
  ))

  useEffect(() => {
    getQuizzes()
  }, [])

  return (
    <div id="QuizzesList">
      <p id="quizzes-title">Quizzes:</p>
      {loading && quizzes.length === 0 ? <p>loading...</p> : null}
      {listOfElements}
    </div>
  )
}

QuizzesList.propTypes = {
  quizzes: PropTypes.array,
  loading: PropTypes.bool,
  getQuizzes: PropTypes.func.isRequired,
  onElementLeftButtonClicked: PropTypes.func,
  textOfElementsLeftButton: PropTypes.string,
  pathToOfElementsLeftButton: PropTypes.string
}

export default QuizzesList
