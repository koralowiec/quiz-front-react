import React from 'react'
import PropTypes from 'prop-types'
import QuestionResultElement from './QuestionResultElement'

const QuestionResultList = ({ answers }) => {
  const questionResultElements = answers.map((answer, i) => (
    <QuestionResultElement
      key={i}
      correct={answer.correct}
      question={answer.question}
      checkedOptions={answer.checkedOptions}
    />
  ))

  return <div>{questionResultElements}</div>
}

QuestionResultList.propTypes = {
  answers: PropTypes.array
}

export default QuestionResultList
