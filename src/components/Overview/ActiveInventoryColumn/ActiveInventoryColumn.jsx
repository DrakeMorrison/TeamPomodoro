import React from 'react';
import TaskRow from '../TaskRow/TaskRow';
import { Droppable } from 'react-beautiful-dnd';

export default class ActiveInventoryColumn extends React.Component {
  render() {

    const listOfTasks = this.props.tasks.map(task => {
        return <TaskRow key={task.id} task={task} index={task.id} />
    });

    const getListStyle = isDraggingOver => ({
      background: isDraggingOver ? 'lightblue' : 'lightgrey',
      padding: '8px',
      width: 250,
    });

    return (
      <Droppable droppableId='droppable' className='ActiveInventoryColumn bg-danger col-sm-6 col-md-4 col-lg-3'>
        <h2>ActiveInventory</h2>

        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {listOfTasks}
            {provided.placeholder}

          </div>
        )}

      </Droppable>
    );
  }
}
