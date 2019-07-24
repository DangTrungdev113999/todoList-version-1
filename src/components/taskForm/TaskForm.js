import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            sltStatus: false
        };
    };

    componentWillMount() {
        const {id ,name, status} = this.props.workEditting
        this.setState({
            id,
            txtName: name,
            sltStatus: status
        })
    }

    componentWillReceiveProps(nextProp) {
        if(nextProp && nextProp.workEditting) {
            const { id, name, status } = nextProp.workEditting;
            this.setState({
                id,
                txtName: name,
                sltStatus: status
            })
        }
    };

    onGetValue = e => {
        const target = e.target;
        const name = target.name;
        let value = (target.type === 'checkbox') ? target.cheked : target.value;
        if(name === 'sltStatus') {
            value = "true" ? true : false;
        }

        this.setState({
            [name]: value
        });
    };

    onSaveWork = e => {
        e.preventDefault();
        const { id, txtName, sltStatus } = this.state;
        this.props.onSaveWork({
            id,
            name: txtName,
            status: sltStatus
        });

        this.onRestForm();
        this.props.isCloseForm();
    };

    onRestForm = () => {
        this.setState({
            id: '',
            txtName: '',
            sltStatus: false
        })
    } 
    render() {
        const { txtName ,sltStatus, id  } = this.state;
        return (
            <div className={ id ? "panel panel-warning" : "panel panel-primary" }>
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { id ? "Cập nhật công việc" : "Thêm công việc" }
                        <span 
                            className="glyphicon glyphicon-remove text-right"
                            onClick={() => this.props.isCloseForm()}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSaveWork}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtName"
                                value={txtName}
                                onChange={this.onGetValue}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            name = 'sltStatus'
                            value={sltStatus}
                            onChange={this.onGetValue}
                        >
                            <option value = {true}>Kích Hoạt</option>
                            <option value = {false}>Ẩn</option>
                        </select><br/>
                        <div className="text-center">
                            <button 
                                type="submit" 
                                className="btn btn-warning"
                                onSubmit={this.onSaveWork}
                                >
                                <span className="fa fa-plus mr-5"></span>Lưu Lại
                            </button>&nbsp;
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={this.onRestForm }
                            >
                                <span className="fa fa-close mr-5"></span>Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default TaskForm;