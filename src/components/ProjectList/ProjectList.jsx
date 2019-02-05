import React from 'react';
import ProjectRow from './ProjectRow/ProjectRow';

export default class ProjectList extends React.Component {
  stateBuilder = () => {
    let newState = {};

    const newProjectState = {
      name: '',
      description: '',
      userIds: [],
    };

    // TODO: make this dynamic
    newState = {
      newProject: newProjectState,
      MakenChecked: false,
      AnnaChecked: false,
      MichaelChecked: false,
      DrakeChecked: false,
    }

    return newState;
  }

  state = this.stateBuilder();

  // project checkbox handler
  projectCheckboxHandler = (event) => {
    console.log(event.target.checked);
    console.log(!event.target.checked);

    // update checked state TODO: make this dynamic
    this.setState({ DrakeChecked: event.target.checked });

    // TODO: add userId to list

  }

  // TODO: create new project
  createNewProject = (e) => {
    e.preventDefault();
    console.error('new project creation attempted', e);
  }

  // project name handler
  projectNameHandler = (event) => {
    this.setState({ newProject: {
      name: event.target.value
    }});
  }

  // project description handler
  projectDescriptionHandler = (event) => {
    this.setState({ newProject: {
      description: event.target.value
    }});
  }

  render() {
    const projects = {
      archived: [],
      unarchived: [],
    };

    // build projects object
    this.props.initialData.projects.forEach(project => {
      if (project.isArchived) {
        projects.archived.push(project);
      } else {
        projects.unarchived.push(project);
      }
    });

    // build unarchived projects
    const unarchivedProjects = projects.unarchived.map(project => {
      return <ProjectRow key={project.id} project={project} isDisabled={false} projectMethods={this.props.projectMethods} />;
    });

    // build archivedprojects
    const archivedProjects = projects.archived.map(project => {
      return <ProjectRow key={project.id} project={project} isDisabled={true} projectMethods={this.props.projectMethods} />;
    })

    // build userList for modal checkbox
    const userCheckboxes = this.props.initialData.users.map(user => {
      return (
        <div className="checkbox" key={user.id}>
          <label>
            <input onChange={this.projectCheckboxHandler} checked={this.state[`${user.name}Checked`]} value={user.id} type="checkbox"></input>
            {user.name}
          </label>
        </div>
      );
    });

    const modalJSX = (
      <div className="modal fade" id="addProject" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Add Project</h4>
            </div>
            <div className="modal-body">

              <form onSubmit={this.createNewProject}>
                <div className="form-group">
                  <label htmlFor="nameOfProject">Name of Project</label>
                  <input onChange={this.projectNameHandler} value={this.state.newProject.name} type="text" className="form-control" id="nameOfProject" placeholder="Project Name"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="descriptionOfProject">Description</label>
                  <input onChange={this.projectDescriptionHandler} value={this.state.newProject.description} type="text" className="form-control" id="descriptionOfProject" placeholder="Describe project here"></input>
                </div>

                <p className='help-block'>Add users on this project</p>
                {userCheckboxes}

                <button type="submit" className="btn btn-success">Add Project!</button>
              </form>

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
