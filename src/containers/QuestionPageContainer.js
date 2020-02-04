import { connect } from 'react-redux'
import QuestionPage from '../components/QuestionPage'
import { answerQuestion, endTheAttempt } from '../redux/actions/attempt.actions'

const mapStateToProps = state => {
  const { questions } = state.attempt
  return {
    questions
  }
}

const mapDispatchToProps = dispatch => ({
  saveAnswer: (questionId, checkedOptionIds, isLastQuestion) =>
    dispatch(answerQuestion(questionId, checkedOptionIds, isLastQuestion))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage)
