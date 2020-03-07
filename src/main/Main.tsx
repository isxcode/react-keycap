import React from "react";
import Avatar from "../../components/avatar/Avatar";
import avatarFile from "../../public/static/avatar.png";

export default class main extends React.Component {

    render() {
        return (<Avatar path={avatarFile}/>);
    }
}

