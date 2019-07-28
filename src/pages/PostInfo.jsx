import React from 'react';
import { connect } from "react-redux";
import { getPostData } from "../redux/actions/getPostActions";

class PostInfo extends React.Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Post</h1>
                <div>{this.props.postValue.id}</div>
                <div>{this.props.postValue.title}</div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: value => dispatch(getPostData(value)),

    };
};

const mapStateToProps = state => {
    return {
        postValue: state.postReducer.postValue
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);