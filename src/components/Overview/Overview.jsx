import React from 'react';
import ActiveInventoryColumn from './ActiveInventoryColumn/ActiveInventoryColumn';
import TodayColumnList from './TodayColumnList/TodayColumnList';

export default class Overview extends React.Component {
  render() {
    return (
      <div className='Overview row'>

        <ActiveInventoryColumn tasks={this.props.initialData.tasks}/>
        <TodayColumnList data={this.props.initialData}/>

      </div>
    );
  }
}
