import React from 'react';
import Axios from 'axios';
import APIURL from '../../apiUrl';

export default class SplashPage extends React.Component {
  state={
    name: '',
  }

  createUser = (event) => {
    event.preventDefault();

    Axios.post(`${APIURL.apiUrl}/user`, this.state)
      .then((id) => {

        // update app state
        const newUser = {
          id: id,
          name: this.state.name,
        }

        this.props.newUser(newUser);

        // update local state
        this.setState({ name: '', });
      })
      .catch(console.error.bind(console));
  }

  handleUserNameChange = (event) => {
    this.setState({ name: event.target.value });
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

        <form className="form-inline" onSubmit={this.createUser}>
          <div className="form-group">
            <label htmlFor="newUser">Name</label>
            <input onChange={this.handleUserNameChange} value={this.state.name} type="text" className="form-control" id="newUser" placeholder="Kevin Flynn"/>
          </div>

          <button type="submit" className="btn btn-danger">Add User</button>
        </form>

        {listOfUsers.reverse()}

      </div>
    );
  }
}
