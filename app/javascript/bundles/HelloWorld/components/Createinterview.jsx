import React from 'react';
import { Redirect } from 'react-router-dom';

export default class CreateInterview extends React.Component {
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

        // var str_array = this.state.participants.split(',');
        // console.log(str_array);


        // for (var i = 0; i < str_array.length; i++) {
        //     // Trim the excess whitespace.
        //     // str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
        //     // Add additional code here, such as:
        //     //    alert(str_array[i]);

        //     // const { match: { params: { id } } } = this.props;
        //     fetch(`/api/v1/interview_participants/${str_array[i]}`).
        //         then((response) => response.json()).
        //         then((participants) => this.setState({
        //             interview_id: [...this.state.interview_id, participants.interview_id]
        //         }));
        // }





        // for (var i = 0; i < this.state.interview_id.length; i++) {
        //     fetch(`/api/v1/interviews/${this.state.interview_id[i]}`).
        //         then((response) => response.json()).
        //         then((interviews) => this.setState({
        //             interview_start: [...this.state.interview_start, interviews.start_time],
        //             interview_end: [...this.state.interview_end, interviews.end_time]
        //         }));
        // }




        // var posting = true


        // for (var i = 0; i < this.state.interview_id.length; i++) {
        //     if (this.state.interview_end < this.state.start_time) { }
        //     else if (this.state.interview_start > this.state.end_time) { }
        //     else {
        //         posting = false;
        //     }
        // }



        // const metaCsrf = document.querySelector("meta[name='csrf-token']");
        // const csrfToken = metaCsrf.getAttribute('content');

        // console.log('this.state', this.state);
        // fetch('/api/v1/interviews', {
        //     method: 'post',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        // }).then((response) => {
        //     // alert('Post created successfully');
        //     // location.href = '/';
        // });

        async function postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').content
                },
                body: JSON.stringify(data)
            });
            return response.json();
        }

        postData('/api/v1/interviews', {
            start_time: this.state.start_time, end_time: this.state.end_time, participants: this.state.participants
        }).then(res => { console.log(res) });



    }

    render() {
        const { start_time, end_time, participants } = this.state;
        return (
            <div>
                <h3>New Interview</h3>
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
                <button onClick={this.createPostRequest}>Create</button>
            </div>
        );
    }
}