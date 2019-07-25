import React, { Component, Fragment } from 'react'
import TaskFrom from '../components/taskForm/TaskForm';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import PropTypes from 'prop-types';

class taskFormContainer extends Component {

    render() {
        return (
            <Fragment>
                <TaskFrom
                    isCloseForm={this.props.isCloseForm}
                    onSaveWork={(work) => this.props.onSaveWork(work)}
                    workEditting={this.props.workEditting}
                />
            </Fragment>
        )
    }
}

taskFormContainer.propTypes = {
    workEditting: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired
    }),
    isCloseForm: PropTypes.func.isRequired,
    onSaveWork: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        workEditting: state.workEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        isCloseForm: () => {
            dispatch(actions.actCloseForm());
        },
        onSaveWork: work => {
            dispatch(actions.actSaveWorkRequest(work));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(taskFormContainer);
