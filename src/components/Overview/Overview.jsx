import React from 'react';
import Nav from '../nav';
import ActiveInventoryColumn from './ActiveInventoryColumn/ActiveInventoryColumn';
import TodayColumnList from './TodayColumnList/TodayColumnList';

export default class Overview extends React.Component {
  render() {
    return (
      <div className='Overview'>
        <Nav />
        <h1>ProjectOverview</h1>

        <ActiveInventoryColumn />
        <TodayColumnList />

      </div>
    );
  }
}
