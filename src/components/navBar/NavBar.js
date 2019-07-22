import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
                <Fragment>
                    <nav className="navbar navbar-inverse">
                        <a className="navbar-brand">Todo List</a>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <NavLink to='/' exact = {true}>Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to='/asdf' exact = {false}>Đang làm</NavLink>
                            </li>
                            <li>
                                <NavLink to='/asdfasdf' exact = {false}>Hoàn Thành</NavLink>
                            </li>
                        </ul>
                    </nav>
                </Fragment>
        )
    }
}

export default NavBar
