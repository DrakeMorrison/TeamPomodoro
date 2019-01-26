import React from 'react';
import ProjectRow from './ProjectRow/ProjectRow';

export default class ProjectList extends React.Component {
  render() {

    const listOfProjects = this.props.initialData.projects.map(project => {
      return (
        <ProjectRow key={project.id} project={project}/>
      );
    });

    return (
      <div className='ProjectList'>
        <h1>ProjectList</h1>
        {listOfProjects}
      </div>
    );
  }
}
