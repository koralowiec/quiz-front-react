import { connect } from 'react-redux'
import UserInfo from '../components/UserInfo'
import { getUserAttempts } from '../redux/actions/user-attemps.actions'

const mapStateToProps = state => ({
  attempts: state.userAttempts.attempts,
  error: state.userAttempts.error
})

const mapDispatchToProps = dispatch => ({
  getUserAttempts: () => dispatch(getUserAttempts())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
