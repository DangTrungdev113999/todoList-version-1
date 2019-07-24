import React, { Component } from 'react';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1,
        }
    }

    onGetValue = async e => {
        const target = e.target;
        const name = target.name;
        let value = (target.type === 'checkbox') ? target.checked : target.value;
        if(name === 'filterStatus') {
            value = parseInt(target.value);
        };
        await this.setState({
            [name] : value
        });

        await this.props.onFilterWork(this.state);
    };
    
    render() {
        const { children } = this.props;
        const { filterName, filterStatus } = this.state;
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
                                        value={filterName}
                                        onChange={this.onGetValue}
                                    />
                                </td>
                                <td>
                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                        value={filterStatus}
                                        onChange={this.onGetValue}
                                    >
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích Hoạt</option>
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