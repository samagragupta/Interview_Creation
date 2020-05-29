import * as actions from '../actions/interviewActions'

export const initialState = {
    interview: [],
    loading: false,
    hasErrors: false,
}

export default function interviewReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_INTERVIEW:
          return { ...state, loading: true }
        case actions.GET_INTERVIEW_SUCCESS:
            // console.log('paylod', action.payload)
          return { interview: action.payload, loading: false, hasErrors: false }
        case actions.GET_INTERVIEW_FAILURE:
          return { ...state, loading: false, hasErrors: true }
        default:
          return state
      }
}