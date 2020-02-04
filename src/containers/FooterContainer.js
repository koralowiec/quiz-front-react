import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = state => ({
  username: state.auth.logged ? state.auth.username : null
})

export default connect(mapStateToProps)(Footer)
