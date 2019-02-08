import React from 'react';

export default class TaskRecord extends React.Component {
  render() {
    return (
      <div className='TaskRecord panel panel-danger'>
        <div className='panel-body'>
          <h2>{this.props.task.name}</h2>
          <h3>Start Time: {this.props.record.startTime}</h3>
          <h3>End Time: {this.props.record.endTime}</h3>
        </div>
      </div>
    );
  }
}
