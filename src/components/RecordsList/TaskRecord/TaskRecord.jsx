import React from 'react';

export default class TaskRecord extends React.Component {
  render() {
    return (
      <div className='TaskRecord panel panel-danger'>
        <div className='panel-body'>
          <h1>TaskRecord</h1>
          <h2>{this.props.record.id}</h2>
          <h3>{this.props.record.temporalResonance}</h3>
        </div>
      </div>
    );
  }
}
