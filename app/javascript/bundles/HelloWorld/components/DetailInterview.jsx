import React, { useState, useEffect } from 'react';

const DetailInterview = (props) => {
  const [participants, setparticipants] = useState([])
  const [interviews, setinterviews] = useState([])

  // console.log("part: ", participants);
  // console.log("interviews: ", interviews);

  useEffect(() => {
    console.log('start')
    fetchParticipantsList();
    fetchInterviewsList();
    console.log('end')
  }, []);

  async function fetchParticipantsList() {
    await fetch('/api/v1/participants').
      then((response) => response.json()).
      then((participants) => setparticipants({ participants }));
  };

  async function fetchInterviewsList() {
    const { match: { params: { id } } } = props;
    await fetch(`/api/v1/interviews/${id}`).
      then((response) => response.json()).
      then((interviews) => setinterviews(interviews));

    console.log("sa", interviews)
  };

  const interviewslist = interviews

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
            interviews.map((interview) => {
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
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default DetailInterview;
