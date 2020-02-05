import { connect } from 'react-redux'
import SignUpPanel from '../components/SignUpPanel'
import { createAnAccout } from '../redux/actions/signUp.action'

const mapStateToProps = state => ({
  error: state.signUp.signUpError,
  created: state.signUp.created
})

const mapDispatchToProps = dispatch => ({
  createAnAccount: (username, password) =>
    dispatch(createAnAccout(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPanel)
