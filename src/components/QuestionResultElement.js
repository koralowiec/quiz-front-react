import React from 'react'
import PropTypes from 'prop-types'
import './QuestionResultElement.css'
import { FormControlLabel, Divider } from '@material-ui/core'
import NotOkIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'
import { GrayCheckbox } from './ColorCheckbox'

const QuestionResultElement = ({ correct, question, checkedOptions }) => {
  const imgUrl = question.photoId
    ? `http://localhost:3000/api/photos/${question.photoId}`
    : ''

  const optionElements = question.options.map((option, i) => {
    let colorClassName = ''
    const checkedOption = checkedOptions.find(el => el.optionId === option.id)
    if (option.isCorrect && checkedOption) {
      colorClassName = 'greenish'
    } else if (
      (option.isCorrect && !checkedOption) ||
      (!option.isCorrect && checkedOption)
    ) {
      colorClassName = 'reddish'
    }
    colorClassName = `option ${colorClassName}`
    return (
      <div key={i} className={colorClassName}>
        <FormControlLabel
          control={<GrayCheckbox checked={checkedOption ? true : false} />}
          label={option.text}
        ></FormControlLabel>
      </div>
    )
  })

  return (
    <div className="QuestionResultElement">
      <div id="question-result-main-info">
        <div id="question-text">{question.description}</div>
        <div style={{ color: correct ? '#9ccc65' : '#ff7043' }}>
          {correct ? <CheckIcon /> : <NotOkIcon />}
        </div>
      </div>
      {imgUrl !== '' ? (
        <img src={imgUrl} className="question-image"></img>
      ) : null}
      {question.snippet ? (
        <div className="question-snippet">{question.snippet}</div>
      ) : null}
      <Divider />
      <div>{optionElements}</div>
    </div>
  )
}

QuestionResultElement.propTypes = {
  correct: PropTypes.bool.isRequired,
  question: PropTypes.shape({
    description: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired
      })
    ),
    photoId: PropTypes.number,
    snippet: PropTypes.string
  }).isRequired,
  checkedOptions: PropTypes.arrayOf(
    PropTypes.shape({
      optionId: PropTypes.number.isRequired,
      correct: PropTypes.bool.isRequired
    })
  )
}

export default QuestionResultElement
