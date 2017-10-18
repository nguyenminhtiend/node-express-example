import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLogin} from '../actions/userActions';
import { Row, Col, FormControl, HelpBlock, FormGroup } from 'react-bootstrap';

const initialState = {
    loginData: {
        userName: '',
        passWord: ''
    }
}

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange(key, event) {
        let loginData = { ...this.state.loginData };
        loginData[key] = event.target.value;
        this.setState({ loginData });
    }

    render() {
        const {loginData} = this.state;
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="form-body">
                    <div className="form-group">
                        <label className="control-label">Username:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Username"
                            value={loginData.userName}
                            onChange={value => { this.handleChange('userName', value); }}
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Password:</label>
                        <input type="password" name="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </div>
                </div>
            </div>
        );
    }
};

LoginPage.propTypes = {
};

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogin: bindActionCreators(handleLogin, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
