import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TodayColumn from './TodayColumnList/TodayColumn/TodayColumn';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

// Moves an item from one list to another list.
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

export default class Overview extends Component {

  // building a new state object
  buildStateObject = () => {
    // new state object
    const newState = {
      inventory: this.props.initialData.tasks
    };

    this.props.initialData.users.forEach(user => {
      newState[user.name] = [];
    });

    return newState;
  }

  // state here because of hoisting
  state = this.buildStateObject();

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  buildId2ListObject = () => {
    // idDroppableContainer: nameSourceArray
    // const id2List = {
    //   inventory: 'inventory',
    // }

    const id2List = {};

    Object.keys(this.state).forEach(list => {
      id2List[list] = list;
    });

    return id2List;
  }

  id2List = this.buildId2ListObject();

  getList = id => this.state[this.id2List[id]];

  // TODO: figure this out and change to accomodate dynamic number of lists
  onDragEnd = result => {
      const { source, destination } = result;

      // dropped outside the list
      if (!destination) {
          return;
      }

      // dropped on the same list it came from
      if (source.droppableId === destination.droppableId) {
          const items = reorder(
              this.getList(source.droppableId),
              source.index,
              destination.index
          );

          let state = { items };

          if (source.droppableId === 'droppable2') {
              state = { selected: items };
          }

          this.setState(state);
      } else {
          const result = move(
              this.getList(source.droppableId),
              this.getList(destination.droppableId),
              source,
              destination
          );

          this.setState({
              items: result.droppable,
              selected: result.droppable2
          });
      }
  };

  render() {

    const listOfColumns = Object.keys(this.state).map(list => {
      return <TodayColumn key={list} droppableId={list} tasks={this.state[list]} />
    });

      return (
        <div className='Overview'>
          <DragDropContext onDragEnd={this.onDragEnd}>

              {listOfColumns}

          </DragDropContext>
        </div>
      );
  }
}
