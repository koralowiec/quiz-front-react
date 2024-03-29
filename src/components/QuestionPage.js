import React, { useState } from 'react'
import PropTypes from 'prop-types'
import QuestionPanel from './QuestionPanel'
import './QuestionPage.css'
import { Divider } from '@material-ui/core'

const QuestionPage = ({ questions, saveAnswer, isLogged }) => {
  const [currentQuestionIndex, setCurentQuestionIndex] = useState(0)

  const onAnswer = (questionId, checkedOptionIds, isLastQuestion) => {
    if (currentQuestionIndex < questions.length) {
      setCurentQuestionIndex(currentQuestionIndex + 1)
      saveAnswer(questionId, checkedOptionIds, isLastQuestion)
    }
  }

  const questionPanels = () => {
    const panels = questions.map((question, i) => {
      const isLastQuestion = questions.length - 1 === i
      return (
        <QuestionPanel
          key={i}
          question={question}
          onAnswer={onAnswer}
          isLastQuestion={isLastQuestion}
        />
      )
    })
    return panels
  }

  return isLogged ? (
    <div id="QuestionPage">
      <p id="question-number">Question {currentQuestionIndex + 1}:</p>
      <Divider />
      <div id="question-wrapper">
        {questions ? questionPanels()[currentQuestionIndex] : <p>loading...</p>}
      </div>
    </div>
  ) : (
    <div>Only logged user can take an attempt</div>
  )
}

QuestionPage.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })
  ),
  saveAnswer: PropTypes.func,
  isLogged: PropTypes.bool
}

export default QuestionPage
