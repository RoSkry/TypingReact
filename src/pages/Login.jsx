import React from 'react';
import { connect } from "react-redux";
import GoogleLogin from 'react-google-login';
import { saveToStoreAction } from "../redux/actions/successActions";
import { saveErrorStoreAction } from "../redux/actions/failureActions";
import { ifExsistToken } from "../redux/actions/authActions";
import Cookies from "js-cookie";

function Login(props) {

    const onSuccess = (e) => {
        console.log(e.accessToken);
        console.log(e.profileObj);
        Cookies.set('accessToken', e.accessToken);
        console.log(Cookies.get('accessToken'));
        props.onSuccessProp(e.profileObj);
        props.ifExisistProp(!!Cookies.get('accessToken'))
    }

    const onFailure = (e) => {
        props.onFailureProp(e.error);
        console.log(e);
        alert(e.error);
    }
    return (
        <React.Fragment>
            <GoogleLogin
                clientId="969663931439-vgac409g5i30gi5jds8mbipg24s90cpt.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSuccessProp: value => dispatch(saveToStoreAction(value)),
        onFailureProp: value => dispatch(saveErrorStoreAction(value)),
        ifExisistProp: value => dispatch(ifExsistToken(value))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Login);