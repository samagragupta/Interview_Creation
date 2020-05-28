import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const EditInterview = (props) => {

    const [start_time, setStartTime] = useState()
    const [end_time, setEndTime] = useState()
    const [participants, setparticipants] = useState()


    const handleInputChange = (event) => {
        if (event.target.name === "start_time") {
            setStartTime(event.target.value)
        }
        else if (event.target.name === "end_time") {
            setEndTime(event.target.value)
        }
        else if (event.target.name === "participants") {
            setparticipants(event.target.value)
        }
    }


    async function createPostRequest(event) {

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

        const { match: { params: { id } } } = props;

        postData(`/api/v1/interviews/${id}`, {
            start_time: start_time, end_time: end_time, participants: participants
        }).then(res => { console.log(res) });


    }

    return (
        <div>
            <h3>Edit Interview</h3>
            <div>
                <label>Participants: </label>
                <input
                    type='text'
                    name='participants'
                    value={participants}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>start_time: </label>
                <input
                    type='datetime-local'
                    name='start_time'
                    value={start_time}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>end_time: </label>
                <input
                    type='datetime-local'
                    name='end_time'
                    value={end_time}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={createPostRequest}>Update</button>
        </div>
    );
}

export default EditInterview;
