import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchInterviewList } from '../actions/interviewlistActions'
import {fetchParticipant} from '../actions/participantActions'

const HelloWorld = (props) => {


  // const { dispatch, interviews, participants } = props;

  const participants = useSelector(
    state => state.participant.participant
  );

    
  const interviews = useSelector (state => state.interviewlist.interviewlist);

  const dispatch = useDispatch()

  useEffect(() => {
    // const { match: { params: { id } } } = props;
    dispatch(fetchInterviewList())
    dispatch(fetchParticipant())
  }, [dispatch])


  async function fetchParticipantsList() {
    await fetch('/api/v1/participants').
      then((response) => response.json()).
      then((participants) => setparticipants( participants ));
  };

  async function fetchInterviewsList() {
    fetch('/api/v1/interviews').
      then((response) => response.json()).
      then((interviews) => setinterviews( interviews ));
  };

  const handleDelete = (id) => {
    fetch(`/api/v1/interviews/${id}`, { method: 'DELETE' }).
      then((response) => {
        alert('Post deleted successfully')
        this.fetchInterviewsList();
      });
  }

  return (
    <div>
      <h3>All participants</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {
            participants? participants.map((participant) => {
              return (
                <tr key={participant.id}>
                  <td>{participant.name}</td>
                  <td>
                    {/* <Link to={`/posts/${post.id}`}> */}
                    {participant.email}
                    {/* </Link> */}
                  </td>
                  <td>{participant.created_at}</td>
                  <td>'Yes'</td>
                </tr>
              )
            }) : null
          }
        </tbody>
      </table>
      <h3>All interviews</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Start Time</th>
            <th>End Time</th>
            {/* <th>Is Published</th> */}
          </tr>
        </thead>
        <tbody>
          {
            interviews? interviews.map((interview) => {
              return (
                <tr key={interview.id}>
                  <td>{interview.start_time}</td>
                  <td>
                    {/* <Link to={`/posts/${post.id}`}> */}
                    {interview.end_time}
                    {/* </Link> */}
                  </td>
                  <td>{interview.created_at}</td>
                  <td>
                    <Link to={`/interviews/${interview.id}`}>
                      detail
                    </Link>
                  </td>
                  <td>
                    <Link to={`/editinterview/${interview.id}`}>
                      EDIT
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(interview.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            }) : null
          }
        </tbody>
      </table>
    </div>
  );
}

// const mapStateToProps = state => ({
//   participants: state.participant.participant,
//   interviews: state.interviewlist.interviewlist,
// })
export default HelloWorld;

// export default connect(mapStateToProps)(HelloWorld)
