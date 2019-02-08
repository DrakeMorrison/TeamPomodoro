import React from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

const grid = 8;

export default class TaskRow extends React.Component {
  render() {

    // item style
    const getItemStyle = (isDragging, draggableStyle) => ({
      // some basic styles to make the items look a bit nicer
      userSelect: 'none',
      padding: grid * 2,
      margin: `0 0 ${grid}px 0`,

      // change background colour if dragging
      background: isDragging ? 'lightgreen' : 'grey',

      // styles we need to apply on draggables
      ...draggableStyle
    });

    return (
      <Draggable
        draggableId={this.props.task.id.toString()}
        index={this.props.index}
      >
        {(provided, snapshot) => (

            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
              )}
            >

            {/* TaskRow Content */}
            <Link to={{
              pathname: `/timer/${this.props.task.id}`,
            }}>
              <h3>TaskRow: {this.props.task.name}</h3>
            </Link>

            </div>
        )}
      </Draggable>
    );
  }
}
