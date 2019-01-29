import React from 'react';
import { Link } from 'react-router-dom';

export default class TaskRow extends React.Component {
  render() {
    return (
      <div className='TaskRow panel panel-warning'>
        <div className='panel-body'>
          <Link to={{
            pathname: `/timer/${this.props.task.id}`,
          }}>
            <h3>{this.props.task.name}</h3>
          </Link>
        </div>
      </div>
    );
  }
}
