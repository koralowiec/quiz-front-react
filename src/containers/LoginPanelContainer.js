import { connect } from 'react-redux'
import LoginPanel from '../components/LoginPanel'
import { logIn, logOut } from '../redux/actions'

const mapStateToProps = state => ({
  isLoggedIn: state.auth.logged,
  loggedUsername: state.auth.username
})

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(logIn(username, password)),
  onLogOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel)
