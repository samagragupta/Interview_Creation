import { SERVER_PREFIX } from '../config'

export const GET_INTERVIEW = 'GET INTERVIEW'
export const GET_INTERVIEW_SUCCESS = 'GET_INTERVIEW_SUCCESS'
export const GET_INTERVIEW_FAILURE = 'GET_INTERVIEW_FAILURE'

export const getInterview = () => ({
    type: GET_INTERVIEW,
})

export const getInterviewSuccess = interview => ({
    type: GET_INTERVIEW_SUCCESS,
    payload: interview,
})

export const getInterviewFailure = () => ({
    type: GET_INTERVIEW_FAILURE,
})

export function fetchInterview(interviewid) {
    const url = `${SERVER_PREFIX}/api/v1/interviews/${interviewid}`;
    console.log("url: ",url)
    return async dispatch => {
        dispatch(getInterview())

        try {
            const response = await fetch(url)
            const data = await response.json()

            console.log("working")
            dispatch(getInterviewSuccess(data))
        } catch (error) {
            dispatch(getInterviewFailure())
        }
    }
}
