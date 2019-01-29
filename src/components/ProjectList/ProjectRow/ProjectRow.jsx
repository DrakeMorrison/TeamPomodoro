import React from 'react';
import { Link } from 'react-router-dom';

export default class ProjectRow extends React.Component {
  render() {
    return (
      <div className='ProjectList panel panel-danger'>
        <div className='panel-body'>
          <Link to={{
            pathname: `/overview/${this.props.project.id}`,
          }}>
            <h1>{this.props.project.name}</h1></Link>
            <h3>{this.props.project.description}</h3>
          </div>
      </div>
    );
  }
}
