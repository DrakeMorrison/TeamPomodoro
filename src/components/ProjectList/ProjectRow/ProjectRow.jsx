import React from 'react';

export default class ProjectRow extends React.Component {
  render() {
    return (
      <div className='ProjectList panel panel-danger'>
        <div className='panel-body'>
          <h1>{this.props.project.name}</h1>
          <h3>{this.props.project.description}</h3>
        </div>
      </div>
    );
  }
}
