import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import routes from './routes';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <div className="container">
                        {this.DisplayPage(routes)}
                    </div>
                </Fragment>
            </Router>
        )
    }

    DisplayPage = routes => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (<Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />)
            })
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;