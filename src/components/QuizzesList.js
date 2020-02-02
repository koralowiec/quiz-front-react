import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import QuizzesListElement from './QuizzesListElement'
import './QuizzesList.css'

const QuizzesList = ({ quizzes, loading, getAllQuizzes, makeAnAttempt }) => {
  const listElements = quizzes.map((quiz, index) => (
    <QuizzesListElement
      key={index}
      quiz={quiz}
      onMakeAnAttemptClick={makeAnAttempt}
    />
  ))

  useEffect(() => {
    getAllQuizzes()
  }, [])
  console.log('list', quizzes, loading)

  return (
    <div id="QuizzesList">
      Quizzes:
      {loading ? <p>loading...</p> : null}
      {listElements}
    </div>
  )
}

QuizzesList.propTypes = {
  quizzes: PropTypes.array
}

export default QuizzesList
