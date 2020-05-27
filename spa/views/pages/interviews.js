let Interview = {
    render: async () => {
        let view = /*html*/ `
        <div class="container">
        <p> Interview Title </p> 
        <p> Interviewer:</p> 
        <p> Interviewee:  </p> 
        <p> Start Time: </p> 
        <p> End Time: </p> 
        <button >
        <a href="#/interviews/1/edit">Edit</a>
        </button>
        <button>
            <a>Delete</a>
        </button>
        </div>
        `;
        return view;
    },
    after_render: async () => { },
};

export default Interview;