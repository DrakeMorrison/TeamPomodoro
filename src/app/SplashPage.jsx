import React from 'react';
import Nav from '../components/nav';

export default class SplashPage extends React.Component {
  render() {
    return (
      <div className='SplashPage'>
        <Nav />
        <h1>Pomodoro Projects!</h1>
      </div>
    );
  }
}
