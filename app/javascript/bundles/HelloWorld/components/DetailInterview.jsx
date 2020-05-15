import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default class DetailInterview extends React.Component {
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
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/interviews/${id}`).
      then((response) => response.json()).
      then((interviews) => this.setState({ interviews }));
  };

  render() {
    const { participants, interviews } = this.state;
    return (
      <div>
        <h3>All participants</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Is Published</th>
            </tr>
          </thead>
          <tbody>
            {
              interviews.map((interview) => {
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
                    <td>'Yes No'</td>
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
