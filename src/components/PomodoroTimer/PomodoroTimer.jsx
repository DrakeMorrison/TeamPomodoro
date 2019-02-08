import React from 'react';
import Timer from 'react-compound-timer';

export default class PomodoroTimer extends React.Component {
  render() {

    const task = this.props.initialData.tasks.filter(
      // find the task that matches
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

          </div>
        )}
        </Timer>
      </div>
    );
  }
}
