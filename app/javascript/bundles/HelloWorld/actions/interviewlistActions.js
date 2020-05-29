import { SERVER_PREFIX } from '../config'

export const GET_INTERVIEW_LIST = 'GET INTERVIEW'
export const GET_INTERVIEW_LIST_SUCCESS = 'GET_INTERVIEW_SUCCESS'
export const GET_INTERVIEW_LIST_FAILURE = 'GET_INTERVIEW_FAILURE'

export const getInterviewList = () => ({
    type: GET_INTERVIEW_LIST,
})

export const getInterviewListSuccess = interviewlist => ({
    type: GET_INTERVIEW_LIST_SUCCESS,
    payload: interviewlist,
})

export const getInterviewListFailure = () => ({
    type: GET_INTERVIEW_LIST_FAILURE,
})

export function fetchInterviewList() {
    const url = `/api/v1/interviews`;
    console.log("url: ",url)
    return async dispatch => {
        dispatch(getInterviewList())

        try {
            const response = await fetch(url)
            const data = await response.json()

            console.log("working")
            // console.log(data)
            dispatch(getInterviewListSuccess(data))
        } catch (error) {
            dispatch(getInterviewListFailure())
        }
    }
}
