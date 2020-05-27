let editInterview = {
    render: async () => {
        let view = /*html*/ `
        <div class="container">
            <div>
                <p>
                    <label for="title">Interviewer id:</label>
                    <input type="number">
                </p>
            </div>
            <div>
                <p>
                    <label for="title">Participants:</label>
                    <input type="number">
                </p>
            </div>
            <div>
                <p>
                    <label for="title">Start time:</label>
                    <input type="datetime-local">
                </p>
            </div>
            <div>
                <p>
                    <label for="title">End time:</label>
                    <input type="datetime-local">
                </p>
            </div>
            <div>
                <p class="control">
                    <button>
                    Create
                    </button>
                </p>
            </div>
        </div>
        `;
        return view;
    },
    after_render: async () => { },
};

export default editInterview;
