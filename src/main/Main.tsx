import React from "react";
import "./style/Main.sass";
import Layout from "../../components/layout/Layout";
import Avatar from "../../components/avatar/Avatar";

export default class main extends React.Component {

    render() {

        // 头像
        // 让我设计的话怎么去弄
        // 可以理解为每一个前端表继都用一个参数去表示
        // 就是把所有的参数拼成一个页面而已
        // 保证用户的高可用性

        // 一个对象/函数 代表一个  一个标签或者一推标签
        // 搭积木

        return <Avatar path={'static/avatar.png'} width={'100px'}/>;
    }
}

