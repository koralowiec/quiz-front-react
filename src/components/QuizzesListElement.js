import React from 'react'
import PropTypes from 'prop-types'
import './QuizzesListElement.css'
import { Button } from '@material-ui/core'
import { Link } from '@reach/router'

const QuizzesListElement = ({
  quiz,
  onButtonOnLeftClicked,
  leftButtonText,
  leftButtonLinkPath
}) => {
  return (
    <div id="QuizzesListElement">
      <div>
        <div id="quiz-title">{quiz.title}</div>
        <div id="quiz-description">{quiz.description}</div>
      </div>
      <Link to={leftButtonLinkPath}>
        <Button
          onClick={() => {
            onButtonOnLeftClicked(quiz.id)
          }}
        >
          {leftButtonText}
        </Button>
      </Link>
    </div>
  )
}

QuizzesListElement.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  onButtonOnLeftClicked: PropTypes.func.isRequired,
  leftButtonText: PropTypes.string,
  leftButtonLinkPath: PropTypes.string
}

export default QuizzesListElement
