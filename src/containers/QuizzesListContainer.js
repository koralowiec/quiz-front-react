import { connect } from 'react-redux'
import QuizzesList from '../components/QuizzesList'
import { getAllQuizzes } from '../redux/actions'
import { makeAnAttempt } from '../redux/actions/attempt.actions'

const mapStateToProps = state => ({
  quizzes: state.quizzes.quizzes,
  loading: state.quizzes.loading
})

const mapDispatchToProps = dispatch => ({
  getAllQuizzes: () => dispatch(getAllQuizzes()),
  makeAnAttempt: quizId => dispatch(makeAnAttempt(quizId))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizzesList)
