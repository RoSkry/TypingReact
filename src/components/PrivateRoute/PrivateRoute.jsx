import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route } from 'react-router-dom';

import Cookies from "js-cookie";

function PrivateRoute(props) {

    const { component: Component, path, ...restProps } = props;

    let isToken = false;

    return <Route {...restProps} path={path} render={() => {

        if (Cookies.get("accessToken")) {
            isToken = true;
        }

        if (isToken) {
            return <Component />;
        } else {
            return <Redirect
                to={{
                    pathname: "/login"
                }}
            />
        }
    }} />
}

export default PrivateRoute;