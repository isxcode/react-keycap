import React from 'react';
// import './style/char.sass';

export default class Avatar extends React.Component<any, any> {
	render(): React.ReactNode {
		return <h2>{this.props.children}</h2>;
	}
}
