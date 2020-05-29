import * as actions from '../actions/participantActions'

export const initialState = {
    participant: [],
    loading: false,
    hasErrors: false,
}

export default function participantReducer(state = initialState, action) {
    // console.log('switch')
    switch (action.type) {
        case actions.GET_PARTICIPANT:
            return { ...state, loading: true }
        case actions.GET_PARTICIPANT_SUCCESS:
            // console.log('starting')
            // console.log('paylod', action.payload)
            return { participant: action.payload, loading: false, hasErrors: false }
        case actions.GET_PARTICIPANT_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}