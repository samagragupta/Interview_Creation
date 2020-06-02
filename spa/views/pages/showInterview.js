import Utils from '../../services/Utils.js'

console.log('show interview')

let getInterviewer = async (id) => {
  console.log("getInterviewer")
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await fetch(`http://localhost:3000/api/v1/interviews/` + id, options)
    const json = await response.json();
    console.log(json)
    return json
  } catch (err) {
    console.log('Error', err)
  }
}

let updateInterview = async(id, interview) => {
  const options = {
      method: 'PUT',
      body: JSON.stringify(interview),
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      }
  };
  try {
      const response = await fetch(`http://localhost:3000/api/v1/interviews/` + id, options)
      const json = await response.json();
      console.log("response", json)
      return json

  } catch (err) {
      console.log('Error', err)
  }
}

let deleteInterview = async(data, id) => {
  console.log("sajbdkas",JSON.stringify(data))
  const options = {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  };
  try {
      const response = await fetch(`http://localhost:3000/api/v1/interviews/` + id, options)
      const json = await response.json();
      console.log("response delete",json)
      alert("Interview has been deleted")
      return json
  } catch (err) {
      console.log('Error', err)
  }
}

let showInterview = {
  render: async () => {
    console.log("render")
    let request = Utils.parseRequestURL()
    let interview = await getInterviewer(request.id)
    console.log("show id", interview)
    let view = /*html*/ `
        <div class="container">
        <div>
        <p>
            <label for="title">Interview id: ${interview.id}</label>
        </p>
        </div>
        <div>
        <p>
            <label for="title">Participants:</label>
            <input id="participants">
        </p>
        </div>
        <div>
            <p>
                <label for="title">Start time:</label>
                <input type="datetime-local" id="start_time">
            </p>
        </div>
        <div>
            <p>
                <label for="title">End time:</label>
                <input type="datetime-local" id="end_time">
            </p>
        </div>
        <div>
            <p class="control">
                <button id="create_button">
                    Create
                </button>
            </p>
        </div>
        <br>
        <br>
        <button id="delete_button">Delete</button>
        </div>
        `;
    return view;
  },

  after_render: async (id) => {
    console.log("id is",id)
    let request = Utils.parseRequestURL()
    let interview = await getInterviewer(request.id)
    console.log("show id 2: ", interview)
    await document.getElementById("create_button").addEventListener("click", () => {
      let participants = document.getElementById("participants").value;
      let start_time = document.getElementById("start_time").value;
      let end_time = document.getElementById("end_time").value;
      let data = {
        interview: {
          participants: participants,
          start_time: start_time + ':00.000Z',
          end_time: end_time + ':00.000Z'
        }
      }
      console.log(data)
      updateInterview(id, data)
    })
    await document.getElementById("delete_button").addEventListener("click", () => {
      let participants = document.getElementById("participants").value;
      let start_time = document.getElementById("start_time").value;
      let end_time = document.getElementById("end_time").value;
      let data = {
        interview: {
          interviewid: interview.id
        }
      }
      console.log(data)
      deleteInterview(data, interview.id)
    })
  }
};

export default showInterview;