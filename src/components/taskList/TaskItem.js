import React, { Component, Fragment } from 'react';

class TaskItem extends Component {

    onDeleteWork = id => {
        this.props.onDeleteWork(id);
    }

    onUpdateWorkStatus = work => {
        this.props.onUpdateWorkStatus(work);
    }

    render() {
        const { work, index } = this.props;
        return (
            <Fragment>
                <tr>
                    <td>{index + 1}</td>
                    <td>{work.name}</td>
                    <td>
                        <span 
                            className={ work.status ? "label label-success" : "label label-danger"}
                            onClick={() => this.onUpdateWorkStatus(work)}
                        > 
                            { work.status && 'kích hoạt' }
                            { !work.status && 'Ẩn' }
                        </span>
                        {work.status && <span className="label label-primary right"> Làm </span>}
                    </td>
                    <td>
                        <button
                            type="submit"
                            className="btn btn-warning ml-15"
                        >
                            <span className="glyphicon glyphicon-fire"></span> Cập nhật
                    </button>&nbsp;
                    <button
                            type="button"
                            className="btn btn-danger"
                            onClick={ () => this.onDeleteWork(work.id)}
                        >
                            <span className="glyphicon glyphicon-remove-sign"></span> Xoá
                    </button>
                    </td>
                </tr>
            </Fragment>
        )
    }
}


export default TaskItem;