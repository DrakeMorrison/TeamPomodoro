import React from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: '16px',
  margin: `0 0 ${8}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

export default class TaskRow extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} className='TaskRow panel panel-warning'>
        {(provided, snapshot) => (
          <div
            className='panel-body'
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
          >
            {/* task content here */}
            <Link to={{
              pathname: `/timer/${this.props.task.id}`,
            }}>
              <h3>{this.props.task.name}</h3>
            </Link>
        </div>
        )}
      </Draggable>
    );
  }
}
