import React from 'react';

export default class Char extends React.Component<any, any> {
	render(): React.ReactNode {
		return <a>{this.props.children}</a>;
	}
}
