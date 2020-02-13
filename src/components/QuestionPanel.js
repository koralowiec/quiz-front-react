import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import CheckboxOption from './CheckboxOption'
import { Link } from '@reach/router'

const QuestionPanel = ({ question, onAnswer, isLastQuestion }) => {
  const [checkedOptionIds, setCheckedOptionIds] = useState(new Set())

  const imgUrl = question.photoId
    ? `http://localhost:3000/api/photos/${question.photoId}`
    : ''

  const addCheckedOptionId = optionId => {
    setCheckedOptionIds(prev => new Set(prev.add(optionId)))
  }

  const removeCheckedOptionId = optionId => {
    const setWithoutRemovedOptionId = [...checkedOptionIds].filter(
      id => id !== optionId
    )
    setCheckedOptionIds(new Set(setWithoutRemovedOptionId))
  }

  const onChecked = (isChecked, optionId) => {
    if (isChecked) {
      addCheckedOptionId(optionId)
    } else {
      removeCheckedOptionId(optionId)
    }
  }

  const options = question.options.map((option, index) => (
    <CheckboxOption
      key={index}
      text={option.text}
      onCheckboxChanged={isChecked => onChecked(isChecked, option.id)}
    />
  ))

  return (
    <div>
      <p>{question.description}</p>
      {question.snippet ? <div>{question.snippet}</div> : null}
      {imgUrl !== '' ? <img src={imgUrl}></img> : null}
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
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string
      })
    ),
    photoId: PropTypes.number,
    snippet: PropTypes.string
  }),
  onAnswer: PropTypes.func.isRequired,
  isLastQuestion: PropTypes.bool
}

export default QuestionPanel
