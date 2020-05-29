import * as actions from '../actions/interviewlistActions'

export const initialState = {
    interviewlist: [],
}

export default function interviewReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_INTERVIEW_LIST_SUCCESS:
            // console.log('paylod', action.payload)
          return { interviewlist: action.payload, loading: false, hasErrors: false }
        default:
          return state
      }
}