import React, { Component, Fragment } from 'react'
import TaskFrom from '../components/taskForm/TaskForm';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class taskFormContainer extends Component {

    onSaveWork = work => {
        this.props.onSaveWork(work);
    }

    render() {
        return (
            <Fragment>
                <TaskFrom
                    isCloseForm={this.props.isCloseForm}
                    onSaveWork={this.onSaveWork}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        isCloseForm: () => {
            dispatch(actions.actCloseForm());
        },
        onSaveWork: work => {
            dispatch(actions.actSaveWorkRequest(work));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(taskFormContainer);
