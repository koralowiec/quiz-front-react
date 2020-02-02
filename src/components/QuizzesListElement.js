import React from 'react'
import PropTypes from 'prop-types'
import './QuizzesListElement.css'
import { Button } from '@material-ui/core'

const QuizzesListElement = ({ quiz, onMakeAnAttemptClick }) => {
  return (
    <div id="QuizzesListElement">
      <div id="quiz-title">{quiz.title}</div>
      <div id="quiz-description">{quiz.description}</div>
      <Button
        onClick={() => {
          onMakeAnAttemptClick(quiz.id)
        }}
      >
        Make an attempt
      </Button>
    </div>
  )
}

QuizzesListElement.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  onMakeAnAttemptClick: PropTypes.func.isRequired
}

export default QuizzesListElement
