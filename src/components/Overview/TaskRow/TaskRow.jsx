import React from 'react';

export default class TaskRow extends React.Component {
  render() {
    return (
      <div className='TaskRow'>
        <h1>TaskRow</h1>
        {this.props.task.name}
      </div>
    );
  }
}
