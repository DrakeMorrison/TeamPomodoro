import React from 'react';
import TaskRecord from './TaskRecord/TaskRecord';

export default class RecordsList extends React.Component {
  render() {

    const listOfRecords = this.props.initialData.records.map(record => {
      return <TaskRecord key={record.id} record={record} />
    });

    return (
      <div className='RecordsList'>
        <h2>RecordsList</h2>
        {listOfRecords}
      </div>
    );
  }
}
