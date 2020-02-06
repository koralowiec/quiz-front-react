import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import QuizzesListElement from './QuizzesListElement'
import './QuizzesList.css'

const QuizzesList = ({
  quizzes,
  loading,
  getAllQuizzes,
  makeAnAttemptAndFetchQuestions
}) => {
  console.log(quizzes)
  const listElements = quizzes.map((quiz, index) => (
    <QuizzesListElement
      key={index}
      quiz={quiz}
      onMakeAnAttemptClick={quizId => {
        makeAnAttemptAndFetchQuestions(quizId)
      }}
    />
  ))

  useEffect(() => {
    getAllQuizzes()
  }, [])

  return (
    <div id="QuizzesList">
      <p id="quizzes-title">Quizzes:</p>
      {loading && quizzes.length === 0 ? <p>loading...</p> : null}
      {listElements}
    </div>
  )
}

QuizzesList.propTypes = {
  quizzes: PropTypes.array,
  loading: PropTypes.bool,
  getAllQuizzes: PropTypes.func,
  makeAnAttemptAndFetchQuestions: PropTypes.func
}

export default QuizzesList
