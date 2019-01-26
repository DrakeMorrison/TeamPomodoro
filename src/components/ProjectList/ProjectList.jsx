import React from 'react';
import Nav from '../nav';
import ProjectRow from './ProjectRow/ProjectRow';

export default class ProjectList extends React.Component {
  render() {
    return (
      <div className='ProjectList'>
        <Nav />
        <h1>ProjectList</h1>
        <ProjectRow />
      </div>
    );
  }
}
