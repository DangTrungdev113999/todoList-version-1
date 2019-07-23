import React, { Component } from 'react';

class TaskList extends Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="filterName"
                                    />
                                </td>
                                <td>
                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                    >
                                        <option >Tất Cả</option>
                                        <option >Ẩn</option>
                                        <option >Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            { children }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TaskList;