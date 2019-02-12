import React from 'react';
import { Route, BrowserRouter, Switch }  from 'react-router-dom';

import Overview from '../components/Overview/Overview';
import ProjectList from '../components/ProjectList/ProjectList';
import PomodoroTimer from '../components/PomodoroTimer/PomodoroTimer';
import RecordsList from '../components/RecordsList/RecordsList';
import SplashPage from '../components/SplashPage/SplashPage'
import initialData from '../initialData';
import Nav from './nav';
// import Axios from 'axios';

// allows me to pass props through the routes
const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

// Returns a route with renderMergedProps
const CustomRoute = ({component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        renderMergedProps(component, props, rest)
      }
    />
  );
};

export default class App extends React.Component {
  state = {
    users: [],
    projects: [],
    usersToProjects: [],
    tasks: [],
    records: []
  }

  getInitialState = () => {

    // getInitialState
    console.error('getInitialState was called in the app component');

    // TODO: get initialData
    // Axios.get('')
    //   .then(() => {
        this.setState({
          users: initialData.users,
          projects: initialData.projects,
          usersToProjects: initialData.usersToProjects,
          tasks: initialData.tasks,
          records: initialData.records
        });
      //     })
      // .catch(console.error.bind(console));
  }

  componentDidMount() {
    this.getInitialState();
  }

  // change project state to archive
  archiveProject = (projectId) => {
    const newProjects = this.state.projects;

    // find index of project
    const projectToArchiveIndex = newProjects.findIndex(project => project.id === projectId);

    // set to true
    newProjects[projectToArchiveIndex].isArchived = true;

    // TODO: axios update the project

    this.setState({ projects: newProjects });
  }

  // restore project state
  restoreProject = (projectId) => {
    const newProjects = this.state.projects;

    // find index of project
    const projectToArchiveIndex = newProjects.findIndex(project => project.id === projectId);

    // set to false
    newProjects[projectToArchiveIndex].isArchived = false;

    // TODO: axios update the project
    // Axios.put('', newProjects[projectToArchiveIndex])
    //   .then(() => {
        this.setState({ projects: newProjects });
      // })
      // .catch(console.error.bind(console));
  }

  // project methods object to pass as prop
  projectMethods = {
    archiveProject: this.archiveProject,
    restoreProject: this.restoreProject
  }

  // create new user
  newUser = (newUser) => {
    // update app state
    const newUsers = this.state.users;
    newUsers.push(newUser);
    this.setState({ users: newUsers});
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div>
            <Nav />
            <div className='container-fluid'>
              <Switch>
                <CustomRoute
                  exact path='/'
                  component={SplashPage}
                  users={this.state.users}
                  newUser={this.newUser}
                />
                <CustomRoute
                  path='/projectlist'
                  component={ProjectList}
                  initialData={this.state}
                  projectMethods={this.projectMethods}
                  getInitialState={this.getInitialState}
                />
                <CustomRoute
                  path='/overview/:id'
                  component={Overview}
                  initialData={this.state}
                  getInitialState={this.getInitialState}
                />
                <CustomRoute
                  path='/timer/:id'
                  component={PomodoroTimer}
                  initialData={this.state}
                  archiveTask={this.archiveTask}
                  getInitialState={this.getInitialState}
                />
                <CustomRoute
                  path='/records'
                  component={RecordsList}
                  initialData={this.state}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
