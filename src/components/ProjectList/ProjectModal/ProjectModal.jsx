import React from 'react';

export default class ProjectModal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="addProject" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Add Project</h4>
            </div>
            <div className="modal-body">

              <form>
                <div className="form-group">
                  <label htmlFor="nameOfProject">Name of Project</label>
                  <input type="text" className="form-control" id="nameOfProject" placeholder="Project Name"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="descriptionOfProject">Description</label>
                  <input type="text" className="form-control" id="descriptionOfProject" placeholder="Describe project here"></input>
                </div>

                <p className='help-block'>Add users on this project</p>
                <p>user checkboxes here</p>

                <button type="submit" className="btn btn-success">Add Project!</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
