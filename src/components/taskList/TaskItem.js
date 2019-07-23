import React, { Component, Fragment } from 'react';

class TaskItem extends Component {

    render() {
        const { work, index } = this.props;
        return (
            <Fragment>
                <tr>
                    <td>{index + 1}</td>
                    <td>{work.name}</td>
                    <td>
                        {!work.status && <span className="label label-danger"> Ẩn </span>}
                        {work.status && <span className="label label-success"> Kích hoạt </span>}
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