import React from "react";

export interface AvatarClass {

    path: string;
    alt?: string;

}

export default class Avatar extends React.Component<AvatarClass> {

    render() {
        return (<img alt={this.props.alt} src={this.props.path}/>);
    }
};
