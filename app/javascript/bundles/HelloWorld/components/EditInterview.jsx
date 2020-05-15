import React from 'react';
import { Redirect } from 'react-router-dom';

export default class EditInterview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_time: '',
            end_time: '',
            participants: '',
            // interview_id: [],
            // interview_start: [],
            // interview_end: [],
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }



    createPostRequest = (event) => {

        async function postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return response.json();
        }

        const { match: { params: { id } } } = this.props;

        postData(`/api/v1/interviews/${id}`, {
            start_time: this.state.start_time, end_time: this.state.end_time, participants: this.state.participants
        }).then(res => { console.log(res) });



    }

    render() {
        const { start_time, end_time, participants } = this.state;
        return (
            <div>
                <h3>Edit Interview</h3>
                <div>
                    <label>Participants: </label>
                    <input
                        type='text'
                        name='participants'
                        value={participants}
                    onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label>start_time: </label>
                    <input
                        type='datetime-local'
                        name='start_time'
                        value={start_time}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label>end_time: </label>
                    <input
                        type='datetime-local'
                        name='end_time'
                        value={end_time}
                        onChange={this.handleInputChange}
                    />
                </div>
                <button onClick={this.createPostRequest}>Update</button>
            </div>
        );
    }
}