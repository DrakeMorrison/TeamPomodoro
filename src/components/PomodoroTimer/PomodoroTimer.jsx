import React from 'react';
import Nav from '../nav';

export default class PomodoroTimer extends React.Component {
  render() {
    return (
      <div className='PomodoroTimer'>
        <Nav />
        <h1>PomodoroTimer</h1>
      </div>
    );
  }
}
