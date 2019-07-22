import React, { Component } from 'react';
import TaskContrlSearch from './TaskContrlSearch';
import TaskContrlSort from './TaskContrlSort';


class TaskContrl extends Component {
    render() {
        return (
        <div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <TaskContrlSearch />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <TaskContrlSort />
            </div>
        </div>
        )
    }
}

export default TaskContrl;