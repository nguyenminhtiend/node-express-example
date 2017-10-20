import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLogin} from '../modules/login';
import { withRouter } from 'react-router';
import './login.scss';

const initialState = {
    loginData: {
        username: '',
        password: ''
    }
}

class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;

        this.login = this.login.bind(this);
    }

    handleChange(key, event) {
        let loginData = { ...this.state.loginData };
        loginData[key] = event.target.value;
        this.setState({ loginData });
    }

    login = () => {
        const {handleLogin} = this.props;
        let successFunc = () => {
            this.props.router.push('/feedback');
        };
        handleLogin(this.state.loginData, successFunc);
    }

    render() {
        const {loginData} = this.state;
        const {errorMessage} = this.props.login;
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="form-body">
                        <div className="form-group">
                            <label className="control-label">Username:</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Username"
                                value={loginData.username}
                                onChange={value => { this.handleChange('username', value); }}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password:</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="password"
                                value={loginData.password}
                                onChange={value => { this.handleChange('password', value); }}
                            />
                        </div>
                        {errorMessage &&
                        <div className="alert alert-danger" role="alert">{errorMessage}</div>
                        }
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        handleLogin: bindActionCreators(handleLogin, dispatch)
    };
}

const mapStateToProps = (state) => ({
  login : state.login
});



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));
