import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TodayColumn from './TodayColumn/TodayColumn';

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

    // get tasks for project
    const tasksForProject = this.props.initialData.tasks.filter(task => {
      return task.projectId*1 === this.props.match.params.id*1;
    });

    // get usersToProjects for this project
    const userProjects = this.props.initialData.usersToProjects.filter(u2p => {
      return u2p.projectId*1 === this.props.match.params.id*1;
    });

    // get users for this project; using the userProjects
    const usersForProject = this.props.initialData.users.filter(user => {
      let check = false;

      userProjects.forEach(u2p => {
        if (user.id*1 === u2p.userId*1) {
          check = true;
        }
      });
      return check;
    });

    // new state object
    const newState = {
      Inventory: tasksForProject
    };

    usersForProject.forEach(user => {
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
    const id2List = {};

    Object.keys(this.state).forEach(list => {
      id2List[list] = list;
    });

    return id2List;
  }

  id2List = this.buildId2ListObject();

  getList = id => this.state[this.id2List[id]];

  // fires when drag ends on item
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

          // set state of the column
          const newState = {};
          newState[source.droppableId] = items;

          this.setState(newState);
      } else { // dropped on a different list
          const result = move(
              this.getList(source.droppableId),
              this.getList(destination.droppableId),
              source,
              destination
          );

            // find source and destination list names
          const sourceListName = source.droppableId;
          const destinationListName = destination.droppableId;

          // new state
          const newState = {};
          newState[sourceListName] = result[sourceListName];
          newState[destinationListName] = result[destinationListName];

          this.setState(newState);
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
