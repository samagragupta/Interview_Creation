import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const CreateParticipant = () => {

  const [name, setname] = useState([])
  const [email, setemail] = useState([])

  const handleInputChange = (event) => {
    if(event.target.name === "name"){
      setname(event.target.value)
    }
    else if(event.target.name === "email"){
      setemail(event.target.value)
    }
  }

  // useEffect(() => {
  //   createPostRequest();
  // }, []);

  async function createPostRequest(event) {
    // console.log('this.state', this.state);
    const statepost = { name, email }
    await fetch('/api/v1/participants', {
      method: 'post',
      body: JSON.stringify(statepost),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Post created successfully');
      location.href = '/';
    });
  }

  return (
    <div>
      <h3>New Post</h3>
      <div>
        <label>name: </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>email: </label>
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {/* <div>
          <label>created_at: </label>
          <input
            type='text'
            name='created_at'
            value={created_at}
            onChange={this.handleInputChange}
            />
        </div> */}
      <button onClick={createPostRequest}>Create</button>
    </div>
  );
}

export default CreateParticipant;
