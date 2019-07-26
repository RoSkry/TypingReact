import React from "react";


function UserInfo(props) {
    return (
        <div>
            <span> {props.name}</span><br />
            <span> {props.lastName}</span><br />
            <span> {props.email}</span><br />
        </div>
    );
}

export default UserInfo;