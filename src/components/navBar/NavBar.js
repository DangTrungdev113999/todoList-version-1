import React, { Component, Fragment } from 'react'

class NavBar extends Component {
    render() {
        return (
                <Fragment>
                    <nav className="navbar navbar-inverse">
                        <a className="navbar-brand">Todo List</a>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a>Trang chủ</a>
                            </li>
                            <li>
                                <a>Đang làm</a>
                            </li>
                            <li>
                                <a>Hoàn Thành</a>
                            </li>
                        </ul>
                    </nav>
                </Fragment>
        )
    }
}

export default NavBar
