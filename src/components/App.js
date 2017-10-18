/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Switch, NavLink, Route} from 'react-router-dom';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import LoginPage from '../containers/LoginPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
    render() {
        const activeStyle = {color: 'blue'};
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="header-title">CONFERENCE</h3>
                            </div>

                            <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                            {' | '}
                            <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
                        </div>
                    </div>
                    {/*<div>*/}
                        {/*<NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>*/}
                        {/*{' | '}*/}
                        {/*<NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>*/}
                        {/*{' | '}*/}
                        {/*<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>*/}
                    {/*</div>*/}
                </div>

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/Login" component={LoginPage}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;
