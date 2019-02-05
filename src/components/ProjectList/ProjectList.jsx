import React from 'react';
import ProjectRow from './ProjectRow/ProjectRow';

export default class ProjectList extends React.Component {

  stateBuilder = () => {
    let newState = {};

    // TODO: make this dynamic
    const checkboxes = {
      Maken: false,
      Anna: false,
      Michael: false,
    };

    const newProjectState = {
      name: '',
      description: '',
      userIds: [],
    };

    newState = {
      newProject: newProjectState,
      checkboxes: checkboxes
    }

    return newState;
  }

  state = this.stateBuilder();

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

    // project checkboxes
    const projectCheckboxHandler = (event) => {
      // const newUids = this.state.newProject.userIds;

      // if (event.target.isChecked) {
      //   newUids.push(event.target.value);
      // }

      console.log(event.target.checked);

      // this.setState({ newProject: {
      //   userIds: newUids
      // }});
    }

    // build userList for modal checkbox
    const userList = this.props.initialData.users.map(user => {
      return (
        <div className="checkbox" key={user.id}>
          <label>
            <input onChange={projectCheckboxHandler} checked={this.state.checkboxes[user.name]} value={user.id} type="checkbox"></input>
            {user.name}
          </label>
        </div>
      );
    });

    // create new project
    const createNewProject = (e) => {
      e.preventDefault();
      console.error('thing', e);
    }

    // project name
    const projectNameHandler = (event) => {
      this.setState({ newProject: {
        name: event.target.value
      }});
    }

    // project description
    const projectDescriptionHandler = (event) => {
      this.setState({ newProject: {
        description: event.target.value
      }});
    }

    const modalJSX = (
      <div className="modal fade" id="addProject" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Add Project</h4>
            </div>
            <div className="modal-body">

              <form onSubmit={createNewProject}>
                <div className="form-group">
                  <label htmlFor="nameOfProject">Name of Project</label>
                  <input onChange={projectNameHandler} value={this.state.newProject.name} type="text" className="form-control" id="nameOfProject" placeholder="Project Name"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="descriptionOfProject">Description</label>
                  <input onChange={projectDescriptionHandler} value={this.state.newProject.description} type="text" className="form-control" id="descriptionOfProject" placeholder="Describe project here"></input>
                </div>

                <p className='help-block'>Add users on this project</p>
                {userList}

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
