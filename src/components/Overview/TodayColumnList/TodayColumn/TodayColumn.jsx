import React from 'react';
import TaskRow from '../../TaskRow/TaskRow';

export default class TodayColumn extends React.Component {
  render() {

    const listOfTasksByUser = this.props.data.tasks.map(task => {
      if (task.userId === this.props.user.id) {
        return <TaskRow key={task.id} task={task} />
      }
      return null;
  });

    return (
      <div className='TodayColumn bg-success col-sm-6 col-md-4 col-lg-3'>
        <h1>TodayColumn: {this.props.user.name}</h1>
        {listOfTasksByUser}
      </div>
    );
  }
}
