import React from 'react';
import TaskRow from './TaskRow/TaskRow';

export default class TodayColumn extends React.Component {
  render() {
    return (
      <div className='TodayColumn'>
        <h1>TodayColumn</h1>
        <TaskRow />
      </div>
    );
  }
}
