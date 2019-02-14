import React from 'react';
import { Link } from 'react-router-dom';

export default class ProjectRow extends React.Component {
  render() {

    const archiveProject = () => {
      this.props.projectMethods.archiveProject(this.props.project.id);
    }

    const restoreProject = () => {
      this.props.projectMethods.restoreProject(this.props.project.id);
    }

    let linkClass = '';

    if (this.props.isDisabled) {
      linkClass = 'btn text-danger disabled';
    } else {
      linkClass = 'btn text-success';
    }

    return (
      <div className='panel panel-danger'>
        <div className='panel-body'>

        <Link className={linkClass} to={{ pathname: `/overview/${this.props.project.id}` }}><h1 className='h1'>{this.props.project.name}</h1></Link>
          <p>{this.props.project.description}</p>

            {this.props.isDisabled ? (
              <button className='btn btn-success' onClick={restoreProject}>Restore</button>
            ) : (
            <button className='btn btn-danger' onClick={archiveProject}>Archive</button>
            )}

          </div>
      </div>
    );
  }
}
