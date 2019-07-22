import React, { Component, Fragment } from 'react';
import './App.css';
import TaskForm from './components/taskForm/TaskForm';
import TaskContrl from './components/taskContrl/TaskContrl';
import TaskList from './components/taskList/TaskList';
import NavBar from './components/navBar/NavBar';

class App extends Component {

    render() {
        return (
            <Fragment>
                <NavBar/>

                <div className="container">
                    <div className="text-center">
                        <h1>Quản Lý Công Việc</h1><hr />
                    </div>
                    <div className="row">
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <TaskForm />
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
                                <TaskContrl />
                            </div>
                            <div className="row mt-15">
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App;