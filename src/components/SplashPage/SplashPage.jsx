import React from 'react';
// import Axios from 'axios';

export default class SplashPage extends React.Component {
  state={
    userName: '',
  }

  createUser = (event) => {
    event.preventDefault();
    // Axios.post('', this.state.userName)
    //   .then((id) => {
      // api should create new user and return id

        // update app state
        const newUser = {
          // id: id,
          name: this.state.userName,
        }
        this.props.newUser(newUser);

        // update local state
        this.setState({ userName: '', });
        console.error('user creation attempted', event)
      // })
      // .catch(console.error.bind(console));
  }

  handleUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  }

  render() {

    const listOfUsers = this.props.users.map(user => {
      return <p key={user.id}>{user.name}</p>;
    });

    return (
      <div className='SplashPage col-sm-12'>
        <div className='page-header'>
          <h1>Pomodoro Projects!</h1>
        </div>

        <h3>Users:</h3>

        {listOfUsers}

        <form className="form-inline" onSubmit={this.createUser}>
          <div className="form-group">
            <label htmlFor="newUser">Name</label>
            <input onChange={this.handleUserNameChange} value={this.state.userName} type="text" className="form-control" id="newUser" placeholder="Kevin Flynn"/>
          </div>

          <button type="submit" className="btn btn-danger">Add User</button>
        </form>

      </div>
    );
  }
}
