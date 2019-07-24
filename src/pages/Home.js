import React, { Component, Fragment } from 'react'
import TaskFormContainer from './../containers/TaskFormContainer';
import TaskControlContainer from './../containers/TaskContrlContainer';
import TaskListContainer from './../containers/TaskListContainer';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Home extends Component {

    onOpenForm = () => {
        this.props.isOpenForm();
        this.props.onResetForm();
    }

    render() {
        const { status } = this.props;
        return (
            <Fragment>
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr />
                </div>
                <div className="row">
                    {
                        status && 
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <TaskFormContainer />
                        </div>
                    }
                    <div className={ status ? 'col-xs-12 col-sm-12 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onOpenForm}
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

const mapStateToProps = state => {
    return {
        status: state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        isOpenForm: () => {
            dispatch(actions.actOpenForm());
        },
        onResetForm: () => {
            dispatch(actions.actResetForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
