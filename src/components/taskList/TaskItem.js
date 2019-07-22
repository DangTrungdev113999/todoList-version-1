import React, { Component } from 'react';

class TaskItem extends Component {

    render() {
        return (
            <tr>
                <td></td>
                <td></td>
                <td>
                    <span className="label label-success">
                        Ẩn
                    </span>
                    
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
        )
    }
}


export default TaskItem;