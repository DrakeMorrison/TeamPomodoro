import React from 'react';
import { Route, BrowserRouter, Switch }  from 'react-router-dom';
import Overview from '../components/Overview/Overview';
import ProjectList from '../components/ProjectList/ProjectList';
import PomodoroTimer from '../components/PomodoroTimer/PomodoroTimer';
import RecordsList from '../components/RecordsList/RecordsList';
import SplashPage from '../components/SplashPage'
import initialData from '../initialData';
import Nav from './nav';

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
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div>
            <Nav />
            <div className='container-fluid'>
              <Switch>
            <Route
              exact path='/'
              component={SplashPage}
            />
            <CustomRoute
              path='/projectlist'
              component={ProjectList}
              initialData={initialData}
            />
            <CustomRoute
              path='/overview'
              component={Overview}
              initialData={initialData}
            />
            <CustomRoute
              path='/timer'
              component={PomodoroTimer}
              initialData={initialData}
            />
            <CustomRoute
              path='/records'
              component={RecordsList}
              initialData={initialData}
            />
          </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
