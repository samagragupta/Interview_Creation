let createInterview = async (interview) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(interview),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/api/v1/interviews`, options)
        const json = await response.json();
        console.log("response", json)
        return json

    } catch (err) {
        console.log('Error', err)
    }
}



let editInterview = {
    render: async () => {
        let view = /*html*/ `
        <div class="container">
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
        </div>
        `;
        return view;
    },


    after_render: async (id) => {
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
            createInterview(data)
        })
    }
};

export default editInterview;
