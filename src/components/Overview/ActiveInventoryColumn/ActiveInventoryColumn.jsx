import React from 'react';
import TaskRow from '../TaskRow/TaskRow';

export default class ActiveInventoryColumn extends React.Component {
  render() {

    const listOfTasks = this.props.tasks.map(task => {
        return <TaskRow key={task.id} task={task} />
    });

    return (
      <div className='ActiveInventoryColumn bg-danger col-sm-6 col-md-4 col-lg-3'>
        <h2>ActiveInventory</h2>
        {listOfTasks}
      </div>
    );
  }
}
