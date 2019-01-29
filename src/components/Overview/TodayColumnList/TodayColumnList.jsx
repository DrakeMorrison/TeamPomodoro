import React from 'react';
import TodayColumn from './TodayColumn/TodayColumn';

export default class TodayColumnList extends React.Component {
  render() {

    const listOfUsers = this.props.data.users.map(user => {
      return <TodayColumn key={user.id} data={this.props.data} user={user} />
    });

    return (
      <div className='TodayColumnList'>
        {listOfUsers}
      </div>
    );
  }
}
