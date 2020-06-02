import React from 'react';
import { Redirect } from 'react-router-dom';

export default class CreateParticipant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      //   created_at: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  createPostRequest = (event) => {
    console.log('this.state', this.state);
    fetch('/api/v1/participants', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').content
      },
    }).then((response) => {
      alert('Post created successfully');
      location.href = '/';
    });
  }

  render() {
    const { name, email, created_at } = this.state;
    return (
      <div>
        <h3>New Post</h3>
        <div>
          <label>name: </label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>email: </label>
          <input
            type='text'
            name='email'
            value={email}
            onChange={this.handleInputChange}
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
        <button onClick={this.createPostRequest}>Create</button>
      </div>
    );
  }
}