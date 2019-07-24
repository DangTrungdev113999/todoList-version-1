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
        const { works } = this.props;
        return (
            <Fragment>
                <TaskList
                    onFilterWork={value => this.props.onFilterWork(value)}
                >
                    {this.displayWorks(works)}
                </TaskList>
            </Fragment>
        )
    }

    displayWorks = works => {
        let result = null;
        const { filterName, filterStatus } = this.props.filterValue;
        const { keyword, sort } = this.props.searchAndSort;
        if (filterName) {
            works = works.filter(work => {
                return work.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
            })
        }

        if (filterStatus !== -1) {
            works = works.filter(work => {
                return (work.status === true ? 1 : 0) === filterStatus;
            })
        }

        if(keyword) {
            works = works = works.filter(work => {
                return work.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            })
        }

        if (sort) {
            if(sort.by === 'name') {
                works = works.sort((a,b) => {
                    if(a.name > b.name) return sort.value;
                    if(a.name < b.name) return -sort.value;
                })
            }else {
                works = works.sort((a,b) => {
                    if(a.status > b.status) return -sort.value;
                    if(a.status < b.status) return sort.value;
                })
            }
        }

        if (works.length > 0) {
            result = works.map((work, index) => {
                return (
                    <TaskItem
                        key={index}
                        work={work}
                        index={index}
                        onDeleteWork={id => this.props.onDeleteWork(id)}
                        onUpdateWorkStatus={work => this.props.onUpdateWorkStatus(work)}
                        onOpenForm={this.props.onOpenForm}
                        onGetWorkEditting={work => this.props.onGetWorkEditting(work)}
                        onCloseForm={this.props.onCloseForm}
                    />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        works: state.works,
        filterValue: state.filterWork,
        searchAndSort: state.searchAndSort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRenderWorks: () => {
            dispatch(actions.actRenderWorksReques());
        },
        onDeleteWork: id => {
            dispatch(actions.actDeleteWorkRequest(id));
        },
        onUpdateWorkStatus: work => {
            dispatch(actions.actUpdateWorkStatusRequest(work));
        },
        onOpenForm: () => {
            dispatch(actions.actOpenForm());
        },
        onGetWorkEditting: work => {
            dispatch(actions.actGetWorkEditting(work));
        },
        onCloseForm: () => {
            dispatch(actions.actCloseForm());
        },
        onFilterWork: value => {
            dispatch(actions.actFilterWork(value))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
