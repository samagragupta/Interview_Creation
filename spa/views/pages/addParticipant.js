let addParticipant = {
    render: async () => {
        let view = /*html*/ `
        <div class="container">
          <p> Adding participant</p>
        </div>
        `;
        return view;
    },
    after_render: async () => { },
};

export default addParticipant;
