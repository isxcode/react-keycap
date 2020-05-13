import React, { CSSProperties } from 'react';

interface KSiderProps {
	width: string;
	mark: boolean;
}

function style(kSiderProps: KSiderProps) {
	const style: CSSProperties = {};

	if (kSiderProps.mark) {
		style.background = 'green';
	}
	style.width = kSiderProps.width;
	style.height = '100%';
	return style;
}

export default class KSider extends React.Component<KSiderProps, any> {
	render() {
		return <div style={style(this.props)}>{this.props.children}</div>;
	}
}
