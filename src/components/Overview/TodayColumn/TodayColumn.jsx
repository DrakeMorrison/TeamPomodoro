import React from 'react';
import TaskRow from './TaskRow/TaskRow';
import { Droppable } from 'react-beautiful-dnd';

export default class TodayColumn extends React.Component {
  render() {

    // listStyle function
    const getListStyle = isDraggingOver => ({
      background: isDraggingOver ? 'tomato' : 'green',
      padding: '8px',
      width: 250,
    });

    return (
      <Droppable droppableId={this.props.droppableId}>
        {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >

              <h3>{this.props.droppableId}</h3>

              <button className='btn btn-success btn-lg' data-toggle='modal' data-target='#addTask'>New Task</button>

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
