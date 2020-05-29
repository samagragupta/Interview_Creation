import { SERVER_PREFIX } from '../config'

export const GET_PARTICIPANT = 'GET PARTICIPANT'
export const GET_PARTICIPANT_SUCCESS = 'GET_PARTICIPANT_SUCCESS'
export const GET_PARTICIPANT_FAILURE = 'GET_PARTICIPANT_FAILURE'

export const getParticipant = () => ({
    type: GET_PARTICIPANT,
})

export const getParticipantSuccess = participant => ({
    type: GET_PARTICIPANT_SUCCESS,
    payload: participant,
})

export const getParticipantFailure = () => ({
    type: GET_PARTICIPANT_FAILURE,
})

export function fetchParticipant() {
    const url = `${SERVER_PREFIX}/api/v1/participants`;
    console.log("url: ",url)
    return async dispatch => {
        dispatch(getParticipant())

        try {
            const response = await fetch(url)
            const data = await response.json()

            console.log("working participant", data)
            dispatch(getParticipantSuccess(data))
        } catch (error) {
            dispatch(getParticipantFailure())
        }
    }
}
