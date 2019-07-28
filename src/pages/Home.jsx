import React from 'react';
import { connect } from "react-redux";
import { fetchData } from "../redux/actions/dataActions";
import { Link } from "react-router-dom";

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const arr = this.props.value.map(item => {
            return <ul key={item.id}>
                <Link to={`/posts/` + item.id}>More info</Link>
                <li> {item.id}</li>
                <li> {item.title}</li>
            </ul>
        })
        console.log(this.props.value);
        return (
            <React.Fragment>
                <h1>Home</h1>
                <div>{arr}</div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData()),

    };
};

const mapStateToProps = state => {
    return {
        value: state.postReducer.value
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);