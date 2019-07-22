import React, { Component, Fragment } from 'react'
import TaskFormContainer from './../containers/TaskFormContainer';
import TaskControlContainer from './../containers/TaskContrlContainer';
import TaskListContainer from './../containers/TaskListContainer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr />
                </div>
                <div className="row">
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <TaskFormContainer />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            <span className="fa fa-plus mr-5"></span>
                            Thêm Công Việc
                        </button>
                        <div className="row mt-15">
                            <TaskControlContainer />
                        </div>
                        <div className="row mt-15">
                            <TaskListContainer />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;
