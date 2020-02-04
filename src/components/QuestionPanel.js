import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, FormControlLabel, Button } from '@material-ui/core'
import CheckboxOption from './CheckboxOption'
import { Link } from '@reach/router'

const QuestionPanel = ({
  question,
  onAnswer,
  isLastQuestion,
  onEndAttempt
}) => {
  const [checkedOptionIds, setCheckedOptionIds] = useState(new Set())

  const options = question.options.map((option, index) => (
    <CheckboxOption
      key={index}
      text={option.text}
      onCheckboxChanged={isChecked => {
        if (isChecked) {
          setCheckedOptionIds(prev => new Set(prev.add(option.id)))
        } else {
          const setWithoutRemovedOptionId = [...checkedOptionIds].filter(
            id => id !== option.id
          )
          setCheckedOptionIds(new Set(setWithoutRemovedOptionId))
        }
      }}
    />
  ))

  return (
    <div>
      <p>{question.description}</p>
      {options}
      {isLastQuestion ? (
        <Link to="/quiz/result">
          <Button
            onClick={() => {
              onAnswer(question.id, checkedOptionIds, isLastQuestion)
            }}
          >
            END
          </Button>
        </Link>
      ) : (
        <Button
          onClick={() => {
            onAnswer(question.id, checkedOptionIds, isLastQuestion)
          }}
        >
          NEXT
        </Button>
      )}
    </div>
  )
}

QuestionPanel.propTypes = {
  questions: PropTypes.array
}

export default QuestionPanel
