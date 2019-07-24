import React, { Component, Fragment } from 'react';

class TaskContrlSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onGetKeyword = e => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }


    render() {
        const { keyword } = this.state;
        return (
            <Fragment>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the keyword"
                        name='keyword'
                        value={keyword}
                        onChange={this.onGetKeyword}
                    />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick= {() => this.props.onSearchWork(keyword)}
                        >
                            <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                    </span>
                </div>
            </Fragment>
        )
    }
}

export default TaskContrlSearch;