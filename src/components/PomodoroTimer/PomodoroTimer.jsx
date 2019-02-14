import React from 'react';
import Timer from 'react-compound-timer';
import Axios from 'axios';
import ApiUrl from '../../apiUrl';

export default class PomodoroTimer extends React.Component {

  // update task
  updateTask = (newTask) => {

    // set archive status to true
    newTask.isArchived = true;

    // axios call update task to archived
    Axios.put(`${ApiUrl.apiUrl}/task`, newTask)
      .then(() => {

        // update state in app component
        this.props.getInitialState();

        // go back to overview
        this.props.history.goBack();
      })
      .catch(console.error.bind(console));
  }

  render() {

    const task = this.props.initialData.tasks.filter(
      // find the task that matches it's id
      task => task.id === this.props.match.params.id*1
      ).map(task => {
        // build element for task
        return <h3 key={task.id}>{task.name}</h3>;
      });

    return (
      <div className='PomodoroTimer'>
        <h2>PomodoroTimer</h2>
        {task}
        <Timer
          initialTime={1500000}
          direction='backward'
          startImmediately={false}
        >
        {({ start, reset, stop }) => (
          <div>
            <p>Minutes: <Timer.Minutes /></p>

            <p>Seconds: <Timer.Seconds /></p>

            <br />

            <button onClick={start} className='btn btn-success'>Start Pomodoro</button>
            <button onClick={() => {
              stop();
              reset();
            }} className='btn btn-danger'>Cancel Pomodoro</button>

            <br />
            <br />
            <button onClick={() => this.updateTask(this.props.location.state)} className='btn btn-danger'>Completed Task</button>

          </div>
        )}
        </Timer>
      </div>
    );
  }
}
