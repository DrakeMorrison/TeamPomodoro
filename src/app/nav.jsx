import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className='navbar-brand' to='/'>Pomodoro Projects</NavLink>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><NavLink to='/projectlist'>Project List</NavLink></li>
              <li><NavLink to='/records'>Records List</NavLink></li>
            </ul>
          </div>

        </div>
      </nav>
      );
  }
}
