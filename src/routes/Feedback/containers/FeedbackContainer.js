import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {getFeedbacks} from "../modules/feedback";
import './feedback.scss';

const initialState = {};

class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentWillMount() {
        const {getFeedbacks} = this.props;
        getFeedbacks();
    }

    render() {
        const {feedbacks} = this.props.feedback;
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Feedback Type</th>
                        <th>Description</th>
                        <th>Answer</th>
                        <th>Meeting Id</th>
                        <th>User Id</th>
                    </tr>
                    </thead>
                    <tbody>
                    {feedbacks.map(function(feedback, index) {
                        return <tr key={index}>
                            <th scope="row">{feedback.id}</th>
                            <td>{feedback.feedback_type}</td>
                            <td>{feedback.description}</td>
                            <td>@{feedback.answer}</td>
                            <td>{feedback.meeting_id}</td>
                            <td>{feedback.user_id}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        getFeedbacks: bindActionCreators(getFeedbacks, dispatch)
    };
}

const mapStateToProps = (state) => ({
    feedback: state.feedback
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));
