import React from 'react';
import TaskRow from '../../TaskRow/TaskRow';
import { Droppable } from 'react-beautiful-dnd';

export default class TodayColumn extends React.Component {
  render() {

    const listOfTasksByUser = this.props.tasks.map((task, index) => {
      if (task.userId === this.props.user.id) {
        return <TaskRow key={task.id} task={task} index={index} />
      }
      return null;
  });

    return (
      <Droppable className='TodayColumn bg-success col-sm-6 col-md-4 col-lg-3'>
        <h1>{this.props.user.name}'s Today List</h1>
        {listOfTasksByUser}
      </Droppable>
    );
  }
}
