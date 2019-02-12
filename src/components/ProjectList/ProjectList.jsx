import React from 'react';
import ProjectRow from './ProjectRow/ProjectRow';
// import Axios from 'axios';

export default class ProjectList extends React.Component {
  state = {
    newProject: {
      name: '',
      description: '',
      userIds: [],
      isArchived: false,
    },
    checkboxClick: false,
    checkboxName: '',
    checkboxValue: '',
    buildCheckboxState: true, // used for the first render
    // includes field for each user: {user.name}Checked: false
  };

  // project checkbox handler
  projectCheckboxHandler = (event) => {
    this.setState({
      checkboxClick: true,
      checkboxName: event.target.dataset.name,
      buildCheckboxState: false,
      checkboxValue: event.target.value,
    })
  }

  // TODO: add axios path
  createNewProject = (e) => {
    e.preventDefault();

    console.error('new project creation attempted', e);

    // use axios to send call to api
    // Axios.post(``, this.state.newProject)
    //   .then(() => {
      // api should create new project and new user2project for each user; return projectId
        // update state on app component
        this.props.getInitialState();

        // route to /overview/:id
        this.props.history.push('/overview/0'); // change 0 to projectId
      // })
      // .catch(console.error.bind(console));
  }

  // project name handler
  projectNameHandler = (event) => {
    this.setState({
      newProject: {
        name: event.target.value,
        description: this.state.newProject.description,
        userIds: this.state.newProject.userIds,
      },
      buildCheckboxState: false,
    });
  }

  // project description handler
  projectDescriptionHandler = (event) => {
    this.setState({
      newProject: {
        description: event.target.value,
        name: this.state.newProject.name,
        userIds: this.state.newProject.userIds,
      },
      buildCheckboxState: false,
    });
  }

  // add checkboxfields to state dynamically
  static getDerivedStateFromProps(props, state) {

    const newState = state;

    if (state.checkboxClick) {

      // change the specific value of the one that changed
      newState[`${state.checkboxName}Checked`] = !state[`${state.checkboxName}Checked`];

      // check if Id is not in userIds
      if (!state.newProject.userIds.includes(state.checkboxValue*1)) {
        newState.newProject.userIds.push(state.checkboxValue*1);
      }

      // reset the variable
      newState.checkboxClick = false;

      } else if (state.buildCheckboxState) {

        // first render; building state with checkboxes
        props.initialData.users.forEach(user => {
          newState[`${user.name}Checked`] = false;
        });

      }

    return newState;
  }

  render() {

    // build userList for modal checkbox
    const userCheckboxes = this.props.initialData.users.map(user => {
      return (
        <div className="checkbox" key={user.id}>
          <label>
            <input onChange={this.projectCheckboxHandler} checked={this.state[`${user.name}Checked`]} value={user.id} data-name={user.name} type="checkbox"></input>
            {user.name}
          </label>
        </div>
      );
    });

    // projects object
    const projects = {
      archived: [],
      unarchived: [],
    };

    // sort projects object
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

    // build archived projects
    const archivedProjects = projects.archived.map(project => {
      return <ProjectRow key={project.id} project={project} isDisabled={true} projectMethods={this.props.projectMethods} />;
    })

    const ModalJSX = (
      <div className="modal fade" id="addProject" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Add Project</h4>
            </div>
            <div className="modal-body">

              <form>
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

                <button onClick={this.createNewProject} data-dismiss='modal' type="submit" className="btn btn-success">Add Project!</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className='ProjectList col-sm-12'>

        {ModalJSX}

        <h2>Project List</h2>
        <button className='btn btn-success btn-lg' data-toggle='modal' data-target='#addProject'>New Project</button>

        {unarchivedProjects}

        <h2>Archived Projects</h2>
        {archivedProjects}
      </div>
    );
  }
}
