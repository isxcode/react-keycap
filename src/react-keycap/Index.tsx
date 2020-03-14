import React from "react";
import './Index.sass'

const name = 'Josh Perez';
const element = <h1>Hello,{name}</h1>;

export default class Index extends React.Component {

    render() {
        return name;
    }
}
