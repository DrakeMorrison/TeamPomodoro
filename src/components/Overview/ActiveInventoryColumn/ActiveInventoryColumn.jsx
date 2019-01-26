import React from 'react';
import TaskRow from '../TaskRow/TaskRow';

export default class ActiveInventoryColumn extends React.Component {
  render() {

    const listOfTasks = this.props.tasks.map(task => {
        return <TaskRow key={task.id} task={task} />
    });

    return (
      <div className='ActiveInventoryColumn'>
        <h1>ActiveInventoryColumn</h1>
        {listOfTasks}
      </div>
    );
  }
}
