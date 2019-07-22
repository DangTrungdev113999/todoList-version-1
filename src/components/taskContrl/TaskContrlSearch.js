import React, { Component } from 'react';

class TaskContrlSearch extends Component {
    render() {
        return (
        <div>
            <div className="input-group">
                <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                        <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                </span>
            </div>
        </div>
        )
    }
}

export default TaskContrlSearch;