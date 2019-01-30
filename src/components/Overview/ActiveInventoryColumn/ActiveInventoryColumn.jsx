import React from 'react';
import TaskRow from '../TaskRow/TaskRow';
import { Droppable } from 'react-beautiful-dnd';

export default class ActiveInventoryColumn extends React.Component {
  render() {

    // listStyle function
    const getListStyle = isDraggingOver => ({
      background: isDraggingOver ? 'lightblue' : 'lightgrey',
      padding: '8px',
      width: 250,
    });

    return (
      <Droppable droppableId="inventory">
        {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              <h3>Active Inventory</h3>

              {this.props.tasks.map((item, index) => (

                <TaskRow key={item.id} task={item} index={index}/>

              ))}
              {provided.placeholder}
            </div>
        )}
      </Droppable>
    );
  }
}
