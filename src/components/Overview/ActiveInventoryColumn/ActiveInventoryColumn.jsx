import React from 'react';
import TaskRow from '../TaskRow/TaskRow';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

const grid = 8;

export default class ActiveInventoryColumn extends React.Component {
  state = {
    items: getItems(10),
    selected: getItems(5, 10)
  };

  render() {

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

    const getListStyle = isDraggingOver => ({
      background: isDraggingOver ? 'lightblue' : 'lightgrey',
      padding: '8px',
      width: 250,
    });

    return (
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}>
                {this.state.items.map((item, index) => (
                    <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                )}>
                                <TaskRow />
                            </div>
                        )}
                    </Draggable>
                ))}
                {provided.placeholder}
            </div>
        )}
      </Droppable>
    );
  }
}
