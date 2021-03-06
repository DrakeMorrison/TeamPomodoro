import React from 'react';
import TaskRow from './TaskRow/TaskRow';
import { Droppable } from 'react-beautiful-dnd';

export default class TodayColumn extends React.Component {
  render() {

    // listStyle function
    const getListStyle = isDraggingOver => ({
      background: isDraggingOver ? '#ebccd1' : 'white',
      borderColor: '#ebccd1',
      padding: '8px',
      width: 250,
    });

    return (
      <Droppable droppableId={this.props.droppableId}>
        {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              className='panel'
            >

              <h3>{this.props.droppableId}</h3>

              {this.props.droppableId === 'Inventory' ? <button className='btn btn-danger' data-toggle='modal' data-target='#addTask'>New Task</button> : null}

              {this.props.tasks.filter(task => task.isArchived === false).map((item, index) => (

                <TaskRow key={item.id} task={item} index={index}/>

              ))}
              {provided.placeholder}
            </div>
        )}
      </Droppable>
    );
  }
}
