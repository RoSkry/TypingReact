import React from 'react';
import UserInfo from '../components/UserInfo/UserInfo'
import { connect } from "react-redux";

function Profile(props) {
    return (
        <UserInfo
            name={props.profData.givenName}
            lastName={props.profData.familyName}
            email={props.profData.email}
        />
    )
}


const mapStateToProps = state => {
    return {
        profData: state.profileReducer.profObj
    };
};

export default connect(mapStateToProps)(Profile);