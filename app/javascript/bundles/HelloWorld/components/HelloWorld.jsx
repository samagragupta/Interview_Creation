import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
      interviews: []
    };
  }

  componentDidMount() {
    this.fetchParticipantsList();
    this.fetchInterviewsList();
  }


  fetchParticipantsList = () => {
    fetch('/api/v1/participants').
      then((response) => response.json()).
      then((participants) => this.setState({ participants }));
  };

  fetchInterviewsList = () => {
    fetch('/api/v1/interviews').
      then((response) => response.json()).
      then((interviews) => this.setState({ interviews }));
  };

  handleDelete = (id) => {
    fetch(`/api/v1/interviews/${id}`, { method: 'DELETE' }).
      then((response) => {
        alert('Post deleted successfully')
        this.fetchInterviewsList();
      });
  }

  render() {
    const { participants, interviews } = this.state;
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
                    <button onClick={() => this.handleDelete(interview.id) }>
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
}
