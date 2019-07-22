import React, { Component, Fragment } from 'react';
import TaskList from './../components/taskList/TaskList';

class TaskListContainer extends Component {
    render() {
        return (
            <Fragment>
                <TaskList></TaskList>
            </Fragment>
        )
    }
}

export default TaskListContainer
