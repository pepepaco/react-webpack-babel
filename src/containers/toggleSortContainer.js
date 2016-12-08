import { connect } from 'react-redux'
import ToggleSort from '../components/toggleSort'

const TOGGLESORT_TOGGLE = 'TOGGLESORT_TOGGLE';

export const ToggleSortReducer = (state=[], action) => {
  switch (action.type) {
    case TOGGLESORT_TOGGLE:
      return {name: action.name}
    default:
      return state
  }
}

const mapStateToProps = (state) => ({
  isActive: state.toggleApp.name
})

const mapDispatchToProps =  ({
  onChange:  (name) => ({type: TOGGLESORT_TOGGLE, name})
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleSort)
