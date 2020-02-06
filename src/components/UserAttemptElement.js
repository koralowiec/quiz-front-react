import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './UserAttemptElement.css'
import { IconButton } from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'
import QuestionResultList from './QuestionResultList'

const greenish = '#9ccc65'
const reddish = '#ff7043'
const grayish = '#bdbdbd'

const lighterGreenish = '#cfff95'
const lighterReddish = '#ffa270'
const lighterGrayish = '#efefef'

const getStyleWithBackgroundColorBasedOnPassedProperty = (passed, lighter) => {
  const style = {
    backgroundColor: lighter ? lighterGreenish : greenish
  }

  if (passed === null) {
    style.backgroundColor = lighter ? lighterGrayish : grayish
  } else if (!passed) {
    style.backgroundColor = lighter ? lighterReddish : reddish
  }

  return style
}

const UserAttemptElement = ({ attempt }) => {
  const [isShowMore, setShowMore] = useState(false)
  const createdDate = new Date(attempt.createdDate)

  return (
    <div id="UserAttemptElement">
      <div
        id="main-attempt-info"
        style={getStyleWithBackgroundColorBasedOnPassedProperty(attempt.passed)}
      >
        <div>
          <div id="quiz-title">{attempt.quiz.title}</div>
          <div id="quiz-description">{attempt.quiz.description}</div>
          <div>
            Started: {createdDate.getHours()}:{createdDate.getMinutes()}{' '}
            {createdDate.toLocaleDateString()}
          </div>
        </div>
        <div className="expand-icon">
          <IconButton onClick={() => setShowMore(!isShowMore)}>
            {isShowMore ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </div>
      </div>
      {isShowMore ? (
        <div
          id="more-info-attempt"
          style={getStyleWithBackgroundColorBasedOnPassedProperty(
            attempt.passed,
            true
          )}
        >
          {attempt.passed === null ? (
            <p>Attempt is not ended</p>
          ) : (
            <QuestionResultList answers={attempt.answers} />
          )}
        </div>
      ) : null}
    </div>
  )
}

UserAttemptElement.propTypes = {
  attempt: PropTypes.object.isRequired
}

export default UserAttemptElement
