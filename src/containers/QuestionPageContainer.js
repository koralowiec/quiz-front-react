import { connect } from 'react-redux'
import QuestionPage from '../components/QuestionPage'
import { answerQuestion } from '../redux/actions/attempt.actions'

const mapStateToProps = state => {
  const { questions } = state.attempt
  return {
    questions,
    isLogged: state.auth.logged
  }
}

const mapDispatchToProps = dispatch => ({
  saveAnswer: (questionId, checkedOptionIds, isLastQuestion) =>
    dispatch(answerQuestion(questionId, checkedOptionIds, isLastQuestion))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage)
