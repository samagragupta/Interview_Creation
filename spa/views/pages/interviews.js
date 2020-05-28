let getInterviewsList = async () => {
    const options = {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/api/v1/interviews`, options)
        const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

let Interview = {
    render: async () => {
        let interviews = await getInterviewsList()
        let view = /*html*/ `
        <div class="container">
        <a class="navbar-item" href="#/interviews/new">
            Create Interview
        </a>
        <ul>
        ${interviews.map(interview =>
            /*html*/`        
            <p> Interview ID: ${interview.id} </p> 
            <p> Start Time: ${interview.start_time}</p> 
            <p> End Time: ${interview.end_time}</p>
            <a class="navbar-item" href="#/interviews/${interview.id}/show">
                Edit
            </a>
            <br> `
        )
            }
        </div>
        `;
        return view;
    },
    after_render: async () => { },
};

export default Interview;