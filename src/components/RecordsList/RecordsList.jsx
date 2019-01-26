import React from 'react';
import Nav from '../nav';
import TaskRecord from './TaskRecord/TaskRecord';

export default class RecordsList extends React.Component {
  render() {
    return (
      <div className='RecordsList'>
        <Nav />
        <h1>RecordsList</h1>
        <TaskRecord />
      </div>
    );
  }
}
