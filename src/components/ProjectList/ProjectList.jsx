import React from 'react';
import ProjectRow from './ProjectRow/ProjectRow';

export default class ProjectList extends React.Component {
  render() {
    const projects = {
      archived: [],
      unarchived: []
    };

    this.props.initialData.projects.forEach(project => {
      if (project.isArchived) {
        projects.archived.push(project);
      } else {
        projects.unarchived.push(project);
      }
    });

    const unarchivedProjects = projects.unarchived.map(project => {
      return <ProjectRow key={project.id} project={project} />;
    });

    const archivedProjects = projects.archived.map(project => {
      return <ProjectRow key={project.id} project={project} />;
    })

    return (
      <div className='ProjectList col-sm-12'>
        <h2>Project List</h2>
        {unarchivedProjects}
        <h2>Archived Projects</h2>
        {archivedProjects}
      </div>
    );
  }
}
