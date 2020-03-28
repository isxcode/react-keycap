import React from "react";
import "./style/Avatar.sass";

export interface AvatarClass {
	path: string;
	alt?: string;
	width?: string;
	height?: string;
}

export default class Avatar extends React.Component<AvatarClass> {
	render() {
		return (
			<img
				className={"keycap-avatar"}
				alt={this.props.alt}
				src={this.props.path}
				width={this.props.width}
				height={this.props.height}
			/>
		);
	}
}
