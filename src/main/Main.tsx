import React from "react";
import Avatar from "../../components/avatar/Avatar";
import avatarFile from "../../public/static/avatar.png";
import "./style/Main.sass";

export default class main extends React.Component {

    // 肯定要写一个解析器来自动生成这些静态


    render() {
        return (
            <div className={"avatar"}>
                <Avatar path={avatarFile} width={"100px"} height={"100px"}/>
                <li>
                    <ul><a href={""}>文章1 </a></ul>
                    <ul><a href={""}>文章2 </a></ul>
                    <ul><a href={""}>文章3 </a></ul>
                    <ul><a href={""}>文章4 </a></ul>
                    <ul><a href={""}>文章5 </a></ul>
                </li>
            </div>
        );
    }
}

