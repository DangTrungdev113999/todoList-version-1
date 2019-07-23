import React, { Component, Fragment } from 'react';
import TaskList from './../components/taskList/TaskList';
import TaskItem from './../components/taskList/TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskListContainer extends Component {

    componentWillMount() {
        this.props.onRenderWorks();
    }

    render() {
        const { works } = this.props
        return (
            <Fragment>
                <TaskList>
                    {this.displayWorks(works)}
                </TaskList>
            </Fragment>
        )
    }

    displayWorks = works => {
        let result = null;
        if (works.length > 0) {
            result = works.map((work, index) => {
                return (
                    <TaskItem
                        key={index}
                        work={work}
                        index={index}
                    />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        works: state.works
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRenderWorks: () => {
            dispatch(actions.actRenderWorksReques());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
