import React from 'react';
import { Link } from 'react-router-dom';

export default class TaskRow extends React.Component {
  render() {
    return (
      <div className='TaskRow panel panel-warning'>
        <Link to={{
          pathname: `/timer/`,
        }}>
          <h3>Task Row!!!</h3>
        </Link>
        </div>
    );
  }
}
