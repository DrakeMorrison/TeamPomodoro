import React from 'react';

export default class TaskRecord extends React.Component {
  render() {
    return (
      <div className='TaskRecord panel panel-danger'>
        <div className='panel-body'>
          <h2>{this.props.task.name}</h2>
          <h3>Time: {this.props.record.temporalResonance}</h3>
        </div>
      </div>
    );
  }
}
