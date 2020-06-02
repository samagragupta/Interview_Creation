import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { connect } from 'react-redux';
import {fetchInterview} from '../actions/interviewActions'

const DetailInterview = (props) => {

  // const { dispatch, state, stateinterview, loading, interviews, hasErrors } = props;

  const interviews = useSelector(
    state => state.interview.interview
  );
  const dispatch = useDispatch()

  console.log('state',state);
  console.log('stateinterview',stateinterview);

  console.log("test interview",interviews)
  useEffect(() => {
    const { match: { params: { id } } } = props;
    dispatch(fetchInterview(id))
  }, [dispatch])


  console.log('interview: ', interviews)

  return (
    <div>
      <h3>All participants</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Interview id</th>
            <th>Partcipants id</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {
            console.log('interviews:sad ', interviews)
          }
          {
            interviews? interviews.map((interview) => {
              console.log('sadassad',interview)
              console.log('sadaghahhgsghssad',interviews)
              return (
                <tr key={interview.id}>
                  <td>{interview.id}</td>
                  <td>{interview.interview_id}</td>
                  <td>
                    {/* <Link to={`/posts/${post.id}`}> */}
                    {interview.participant_id}
                    {/* </Link> */}
                  </td>
                  <td>{interview.created_at}</td>
                </tr>
              ) 
            }) : null
          }
        </tbody>
      </table>
    </div>
  );
}

// export default DetailInterview;

// const mapStateToProps = state => ({
//   loading: state.interview.loading,
//   interviews: state.interview.interview,
//   hasErrors: state.interview.hasErrors,
//   state: state,
//   stateinterview: state.interview,
// })
// export default connect(mapStateToProps)(DetailInterview)

export default DetailInterview;

