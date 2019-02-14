import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TodayColumn from './TodayColumn/TodayColumn';
import Axios from 'axios';
import ApiUrl from '../../apiUrl';

// TODO: filter tasks by user and have them in their correct state array

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

  projectId = this.props.match.params.id*1;

  // building a new state object
  buildStateObject = (props) => {

    // get tasks for project
    const tasksForProject = props.initialData.tasks.filter(task => {
      return task.projectId*1 === this.projectId;
    });

    // get usersToProjects for this project
    const userProjects = props.initialData.usersToProjects.filter(u2p => {
      return u2p.projectId*1 === this.projectId;
    });

    // get users for this project; using the userProjects
    const usersForProject = props.initialData.users.filter(user => {
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
      newTask: {
        name: '',
        estimatedPomodori: 0,
        actualPomodori: 0,
        internalInterruptions: 0,
        externalInterruptions: 0,
        userId: 0,
        isArchived: false,
        isAssigned: false,
        projectId: this.projectId,
        recordId: 0, // api changes this to correct value
        },
      columns: {},
    };

    const columns = {
      Inventory: tasksForProject,
    };

    usersForProject.forEach(user => {
      columns[user.name] = [];
    });

    newState.columns = columns;

    return newState;
  }

  // state here because of hoisting
  state = this.buildStateObject(this.props);

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  buildId2ListObject = () => {
    const id2List = {};

    Object.keys(this.state.columns).forEach(list => {
      id2List[list] = list;
    });

    return id2List;
  }

  id2List = this.buildId2ListObject();

  getList = id => this.state.columns[this.id2List[id]];

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
          const newState = this.state.columns;
          newState[source.droppableId] = items;

          this.setState({ columns: newState });
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
          const newState = this.state.columns;
          newState[sourceListName] = result[sourceListName];
          newState[destinationListName] = result[destinationListName];

          this.setState({ columns: newState });
      }
  };

  // new task name state handler
  taskNameHandler = (event) => {
    this.setState({ newTask: {
      name: event.target.value,
      estimatedPomodori: 0,
      actualPomodori: 0,
      internalInterruptions: 0,
      externalInterruptions: 0,
      userId: 0,
      isArchived: false,
      projectId: this.projectId,
   } });
  }

  createNewTask = (e) => {
    e.preventDefault();

    Axios.post(`${ApiUrl.apiUrl}/task`, this.state.newTask)
      .then((res) => {

        // update state on app component
        this.props.getInitialState();

        const updatedColumns = this.state.columns;
        updatedColumns.Inventory.push(this.state.newTask);

        this.setState({ columns: updatedColumns, newTask: {
          id: res.data,
          name: '',
          estimatedPomodori: 0,
          actualPomodori: 0,
          internalInterruptions: 0,
          externalInterruptions: 0,
          userId: 0,
          isArchived: false,
          projectId: this.projectId,
       }});
      })
      .catch(console.error.bind(console));
  }

  render() {

    const listOfColumns = Object.keys(this.state.columns).map(list => {
      return <TodayColumn key={list} droppableId={list} tasks={this.state.columns[list]} />
    });

    const ModalJSX = (
      <div className="modal fade" id="addTask" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Add Task</h4>
            </div>
            <div className="modal-body">

              <form>
                <div className="form-group">
                  <label htmlFor="nameOfTask">Name of Project</label>
                  <input onChange={this.taskNameHandler} value={this.state.newTask.name} type="text" className="form-control" id="nameOfTask" placeholder="Task Name"></input>
                </div>

                <button onClick={this.createNewTask} data-dismiss='modal' type="submit" className="btn btn-danger">Add Task!</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className='Overview text-center'>
        <DragDropContext onDragEnd={this.onDragEnd}>

            {ModalJSX}

            {listOfColumns}

        </DragDropContext>
      </div>
    );
  }
}
