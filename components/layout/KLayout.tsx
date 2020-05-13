import React from 'react';

interface KLayoutProps {}

const style = {
	height: '100%',
	width: '100%',
};

export default class KLayout extends React.Component<KLayoutProps, any> {
	render() {
		return <div style={style}>{this.props.children}</div>;
	}
}
