import React from 'react'
import PropTypes from 'prop-types'
import QuizzesList from '../QuizzesList'

const ManageQuizzes = ({
  isAllowed,
  getManageableQuizzes,
  quizzes,
  loading
}) => {
  return !isAllowed ? (
    <div>
      <p>Normal user cannot be here</p>
    </div>
  ) : (
    <div>
      <QuizzesList
        getQuizzes={getManageableQuizzes}
        quizzes={quizzes}
        loading={loading}
        pathToOfElementsLeftButton="/"
        textOfElementsLeftButton="Edit"
        onElementLeftButtonClicked={quizId =>
          console.log('Quiz to edit', quizId)
        }
      />
    </div>
  )
}

ManageQuizzes.propTypes = {
  isAllowed: PropTypes.bool,
  getManageableQuizzes: PropTypes.func,
  quizzes: PropTypes.array,
  loading: PropTypes.bool
}

export default ManageQuizzes
