import React from 'react';
import ProjectRow from './ProjectRow/ProjectRow';
import ProjectModal from './ProjectModal/ProjectModal';

export default class ProjectList extends React.Component {
  state = {
    newProject: {
      name: '',
      description: '',
      userIds: [],
    },
  };

  // project checkbox handler
  projectCheckboxHandler = (event) => {

    // update checked state TODO: make this dynamic
    this.setState({ DrakeChecked: event.target.checked });

    // TODO: add userId to list

  }

  // TODO: create new project
  createNewProject = (e) => {
    e.preventDefault();
    console.error('new project creation attempted', e);
    // use axios to send call to api
    // api returns projectId so we can .then route to the overview component
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

  // TODO: WIP: getderivedstatefrom props and add checkboxfields to state dynamically
  static getDerivedStateFromProps(props, state) {
    const newState = state;

    props.initialData.users.forEach(user => {
      newState[`${user.name}Checked`] = false;
    });

    return newState;
  }

  render() {

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

    return (
      <div className='ProjectList col-sm-12'>

        <ProjectModal userCheckboxes={userCheckboxes} />

        <h2>Project List</h2>
        <button className='btn btn-success btn-lg' data-toggle='modal' data-target='#addProject'>New Project</button>

        {unarchivedProjects}

        <h2>Archived Projects</h2>
        {archivedProjects}
      </div>
    );
  }
}
