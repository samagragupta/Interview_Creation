let getParticipantsList = async () => {
  const options = {
      method: 'GET',
      headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json'
      }
  };
  try {
      const response = await fetch(`http://localhost:3000/api/v1/participants`, options)
      const json = await response.json();
      // console.log(json)
      return json
  } catch (err) {
      console.log('Error getting documents', err)
  }
}

let Participants = {
    render: async () => {
      let participants = await getParticipantsList()
      let view = /*html*/ `
      <div class="container">
      <a class="navbar-item" href="#/participants/new">
          Create Participant
      </a>
      <ul>
      ${participants.map(participant =>
          /*html*/`        
          <p> Participant ID: ${participant.id} </p> 
          <p> Name: ${participant.name}</p> 
          <p> Email: ${participant.email}</p>
          <br> `
      )
          }
      </div>
      `;
      return view;
    },
    after_render: async () => { },
};

export default Participants;