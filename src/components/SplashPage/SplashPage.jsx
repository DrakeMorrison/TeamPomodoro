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
      return <p className='text-center h4' key={user.id}>{user.name}</p>;
    });

    return (
      <div className='SplashPage col-sm-12 text-center'>
        <div className='page-header'>
          <h1>Pomodoro Projects!</h1>
          <h3>Do more and have fun with time management</h3>
        </div>
        <blockquote>
          <p>
            For many people, time is an enemy. We race against the clock to finish assignments and meet deadlines. The Pomodoro Technique teaches you to work with time, instead of struggling against it. A revolutionary time management system, it is at once deceptively simple to learn and life-changing to use.
          </p>
        </blockquote>

        <blockquote>
          <p>
            The Pomodoro Technique has been featured several times in reviews and magazines. Get an overview of the last news and articles about the Pomodoro Technique.
          </p>
          <footer>See more at the official <cite><a className='text-danger' href="https://francescocirillo.com/pages/pomodoro-technique" target="_blank" rel="noopener noreferrer">Pomodoro Technique website</a></cite></footer>
        </blockquote>

        <h3 className='text-center'>Users:</h3>

        <form className="form-inline text-center" onSubmit={this.createUser}>
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
