import React from 'react';
import ActiveInventoryColumn from './ActiveInventoryColumn/ActiveInventoryColumn';
import TodayColumnList from './TodayColumnList/TodayColumnList';
import { DragDropContext } from 'react-beautiful-dnd';


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default class Overview extends React.Component {
  state={
    items: [],
    selected: []
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }


  render() {
    return (
      <div className='Overview row'>

        <DragDropContext onDragEnd={this.onDragEnd}>

          <ActiveInventoryColumn tasks={this.props.initialData.tasks}/>
          <TodayColumnList data={this.props.initialData}/>

        </DragDropContext>

      </div>
    );
  }
}
