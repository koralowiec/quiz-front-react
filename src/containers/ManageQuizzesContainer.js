import { connect } from 'react-redux'
import ManageQuizzes from '../components/manage-quizzes/ManageQuizzes'
import { userRoles } from '../constants/userRoles'
import { getManageableQuizzes } from '../redux/actions/manageable-quizzes.actions'

const mapStateToProps = state => {
  const { userRole } = state.auth
  const { quizzes, loading } = state.manageableQuizzes
  console.log('mapStateToProps', quizzes)
  const isAllowed =
    userRole === userRoles.admin || userRole === userRoles.quizMaker
  return {
    isAllowed,
    quizzes,
    loading,
    textOfElementsLeftButton: 'Edit',
    pathToOfElementsLeftButton: '/'
  }
}

const mapDispatchToProps = dispatch => ({
  getManageableQuizzes: () => dispatch(getManageableQuizzes())
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageQuizzes)
