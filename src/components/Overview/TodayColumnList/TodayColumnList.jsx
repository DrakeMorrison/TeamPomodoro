import React from 'react';
import TodayColumn from './TodayColumn/TodayColumn';

export default class TodayColumnList extends React.Component {
  render() {
    return (
      <div className='TodayColumnList'>
        <h1>TodayColumnList</h1>
        <TodayColumn />
      </div>
    );
  }
}
