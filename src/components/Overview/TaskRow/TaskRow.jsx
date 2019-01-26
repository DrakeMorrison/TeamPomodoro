import React from 'react';

export default class TaskRow extends React.Component {
  render() {
    return (
      <div className='TaskRow panel panel-default'>
        <div className='panel-body'>
          <h1>TaskRow</h1>
          {this.props.task.name}
        </div>
      </div>
    );
  }
}
