import { combineReducers } from 'redux'
import {ToggleSortReducer} from '../containers/toggleSortContainer'

const toggleApp = combineReducers({
  toggleApp:ToggleSortReducer,
})

export default toggleApp
