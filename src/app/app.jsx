import React from 'react';
import { Route, BrowserRouter, Switch }  from 'react-router-dom';
import Overview from '../components/Overview/Overview';
import ProjectList from '../components/ProjectList/ProjectList';
import PomodoroTimer from '../components/PomodoroTimer/PomodoroTimer';
import RecordsList from '../components/RecordsList/RecordsList';
import SplashPage from '../components/SplashPage'

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route
              exact path='/'
              component={SplashPage}
            />
            <Route
              path='/projectlist'
              component={ProjectList}
            />
            <Route
              path='/overview'
              component={Overview}
            />
            <Route
              path='/timer'
              component={PomodoroTimer}
            />
            <Route
              path='/records'
              component={RecordsList}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
