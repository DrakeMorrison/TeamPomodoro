import React from 'react';
import TaskRecord from './TaskRecord/TaskRecord';

export default class RecordsList extends React.Component {
  render() {

    // add task to record
    const listOfRecords = [];

    this.props.initialData.records.forEach(record => {

      const recordElement = this.props.initialData.tasks.map(task => {
        if (task.recordId === record.id) {
          return <TaskRecord key={record.id} record={record} task={task}/>
        }
        return null;
      });

      listOfRecords.push(recordElement);
    });

    return (
      <div className='RecordsList'>
        <h2>Records List</h2>
        {listOfRecords.reverse()}
      </div>
    );
  }
}
