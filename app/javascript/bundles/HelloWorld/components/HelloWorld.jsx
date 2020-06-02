import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HelloWorld = () => {

  const [participants, setparticipants] = useState([])
  const [interviews, setinterviews] = useState([])

  useEffect(() => {
    console.log('start')
    fetchParticipantsList();
    fetchInterviewsList();
    console.log('end')
  }, []);


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
            participants.map((participant) => {
              const {id, name, email, created_at} = participant
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>
                    {/* <Link to={`/posts/${post.id}`}> */}
                    {email}
                    {/* </Link> */}
                  </td>
                  <td>{created_at}</td>
                  <td>'Yes'</td>
                </tr>
              )
            })
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
            interviews.map((interview) => {
              const {start_time, end_time, created_at, id} = interview
              return (
                <tr key={id}>
                  <td>{start_time}</td>
                  <td>
                    {/* <Link to={`/posts/${post.id}`}> */}
                    {end_time}
                    {/* </Link> */}
                  </td>
                  <td>{created_at}</td>
                  <td>
                    <Link to={`/interviews/${id}`}>
                      detail
                    </Link>
                  </td>
                  <td>
                    <Link to={`/editinterview/${id}`}>
                      EDIT
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default HelloWorld;
