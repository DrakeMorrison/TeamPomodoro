import React from 'react';

export default class TaskRecord extends React.Component {
  render() {
    const startTime = new Date(`${this.props.record.startTime}Z`);
    const endTime = new Date(`${this.props.record.endTime}Z`);
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };

    return (
      <div className='TaskRecord panel panel-danger'>
        <div className='panel-body'>
          <h3>{this.props.task.name}</h3>
          <p>Created: {startTime.toLocaleDateString(undefined, options)}</p>
          <p>Finished: {endTime.toLocaleDateString(undefined, options)}</p>
        </div>
      </div>
    );
  }
}
