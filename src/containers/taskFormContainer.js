import React, { Component, Fragment } from 'react'
import TaskFrom from '../components/taskForm/TaskForm';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class taskFormContainer extends Component {
    render() {
        return (
            <Fragment>
                <TaskFrom
                    isCloseFrom={this.props.isCloseFrom}
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
        isCloseFrom: () => {
            dispatch(actions.actCloseForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(taskFormContainer);
