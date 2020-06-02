let createInterview = async (interview) => {
  console.log(JSON.stringify(interview))
  const options = {
      method: 'POST',
      body: JSON.stringify(interview),
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      }
  };
  try {
      const response = await fetch(`http://localhost:3000/api/v1/participants`, options)
      const json = await response.json();
      console.log("response", json)
      return json

  } catch (err) {
      console.log('Error', err)
  }
}

let addParticipant = {
    render: async () => {
        let view = /*html*/ `
        <div class="container">
          <p> Adding participant</p>
          <div>
          <p>
              <label for="title">Name:</label>
              <input id="name">
          </p>
        </div>
        <div>
            <p>
                <label for="title">Email:</label>
                <input id="email">
            </p>
        </div>
        <div>
          <p class="control">
              <button id="create_button">
                  Create
              </button>
          </p>
        </div>
        </div>
        `;
        return view;
    },
    after_render: async (id) => {
      await document.getElementById("create_button").addEventListener("click", () => {
          let name = document.getElementById("name").value;
          let email = document.getElementById("email").value;
          let data = {
              participant: {
                  name: name,
                  email: email,
              }
          }
          console.log(data)
          createInterview(data)
      })
  }
};

export default addParticipant;
