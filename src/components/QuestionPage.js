import React, { useState, useEffect } from 'react'
import QuestionPanel from './QuestionPanel'

const QuestionPage = ({ questions, saveAnswer }) => {
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

  return (
    <>
      <div>Question {currentQuestionIndex + 1}</div>
      {questions ? questionPanels()[currentQuestionIndex] : <p>loading...</p>}
    </>
  )
}

export default QuestionPage
