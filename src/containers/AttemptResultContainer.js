import AttemptResult from '../components/AttemptResult'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  result: state.attempt.details,
  fullResult: state.attempt.fullResult
})

export default connect(mapStateToProps)(AttemptResult)
