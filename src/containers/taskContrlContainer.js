import React, { Component, Fragment } from 'react'
import TaskContrlSearch from './../components/taskContrl/TaskContrlSearch';
import TaskContrlSort from './../components/taskContrl/TaskContrlSort';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskContrlContainer extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <TaskContrlSearch 
                        onSearchWork = {(keyword) => this.props.onSearchWork(keyword)}
                    />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <TaskContrlSort 
                        onSortWork = {(value) => this.props.onSortWork(value)}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchWork: keyword => {
            dispatch(actions.actSearchWord(keyword));
        },
        onSortWork: value => {
            dispatch(actions.actSortWord(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContrlContainer)
