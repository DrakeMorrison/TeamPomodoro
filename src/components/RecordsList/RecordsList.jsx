import React from 'react';
import TaskRecord from './TaskRecord/TaskRecord';

export default class RecordsList extends React.Component {
  render() {

    const listOfRecords = this.props.initialData.records.map(record => {
      return <TaskRecord key={record.id} record={record} />
    });

    return (
      <div className='RecordsList'>
        <h1>RecordsList</h1>
        {listOfRecords}
      </div>
    );
  }
}
