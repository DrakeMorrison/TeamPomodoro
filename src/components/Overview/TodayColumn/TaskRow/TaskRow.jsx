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
      borderColor: '',
      border: 'solid 1px #5cb85c',

      // change background colour if dragging
      background: isDragging ? '#5cb85c' : 'white',

      // styles we need to apply on draggables
      ...draggableStyle
    });

    // hotfix for demo day; TODO: change createNewTask func to allow props to create state? or try something else.
    const counter = () => {
      let count = 1000;
      count++;
      return count;
    };

    return (
      <Draggable
        draggableId={this.props.task.id ? this.props.task.id.toString() : counter().toString()}
        index={this.props.index}
        key={this.props.index}
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
            <Link className='btn' to={{
              pathname: `/timer/${this.props.task.id}`,
              state: this.props.task,
            }}>
              <h3 className='text-success'>{this.props.task.name}</h3>
            </Link>

            </div>
        )}
      </Draggable>
    );
  }
}
