import { connect } from 'react-redux'
import Header from '../components/Header'
import { logOut } from '../redux/actions'

const mapStateToProps = state => ({
  isLogged: state.auth.logged,
  role: state.auth.userRole
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
