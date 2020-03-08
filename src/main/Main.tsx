import React from "react";
import Avatar from "../../components/avatar/Avatar";
import avatarFile from "../../public/static/avatar.png";
import "./style/Main.sass";
import ReactMarkdown from "react-markdown";
import input from '../../blogs/nginx.md';

export default class main extends React.Component {

    render() {
        return (
            <div className={"avatar"}>
                <Avatar path={avatarFile} width={"100px"} height={"100px"}/>
                <ReactMarkdown source={input} />
            </div>
        );
    }
}

