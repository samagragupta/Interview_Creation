import { combineReducers } from 'redux'
import interviewReducer from './interviewReducer'
import participantReducer from './participantReducer'
import interviewlistReducer from './interviewlistReducer'
import createparticipantReducer from './createparticipantReducer'

const rootReducer = combineReducers({
    interview: interviewReducer,
    participant: participantReducer,
    interviewlist: interviewlistReducer,
    createparticipant: createparticipantReducer,
  })

export default rootReducer;