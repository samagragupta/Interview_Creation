import { combineReducers } from 'redux'
import interviewReducer from './interviewReducer'
import participantReducer from './participantReducer'
import interviewlistReducer from './interviewlistReducer'

const rootReducer = combineReducers({
    interview: interviewReducer,
    participant: participantReducer,
    interviewlist: interviewlistReducer,
  })

export default rootReducer;