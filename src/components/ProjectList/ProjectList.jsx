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
      return <ProjectRow key={project.id} project={project} isDisabled={false} projectMethods={this.props.projectMethods} />;
    });

    const archivedProjects = projects.archived.map(project => {
      return <ProjectRow key={project.id} project={project} isDisabled={true} projectMethods={this.props.projectMethods} />;
    })

    const modalJSX = (
      <div className="modal fade" id="addProject" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Add Project</h4>
            </div>
            <div className="modal-body">

              <form>
                <div class="form-group">
                  <label for="nameOfProject">Name of Project</label>
                  <input type="text" class="form-control" id="nameOfProject" placeholder="Project Name"></input>
                </div>
                <div class="form-group">
                  <label for="descriptionOfProject">Description</label>
                  <input type="text" class="form-control" id="descriptionOfProject" placeholder="Describe project here"></input>
                </div>
              </form>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Add Project!</button>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className='ProjectList col-sm-12'>
        {modalJSX}
        <h2>Project List</h2>
        <button className='btn btn-success btn-lg' data-toggle='modal' data-target='#addProject'>New Project</button>
        {unarchivedProjects}

        <h2>Archived Projects</h2>
        {archivedProjects}
      </div>
    );
  }
}
