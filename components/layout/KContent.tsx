import React, { CSSProperties } from 'react';
import { customColor } from '../common/colorUtils';

interface KContentProps {
	width?: string;
	height?: string;
	mark: boolean;
}

function style(kContentProps: KContentProps) {
	const style: CSSProperties = {};

	if (kContentProps.mark) {
		style.background = customColor();
	}
	if (kContentProps.width == null) {
		style.height = kContentProps.height;
		style.width = '100%';
	} else if (kContentProps.height == null) {
		style.width = kContentProps.width;
		style.height = '100%';
	} else {
		style.height = '100%';
		style.width = '100%';
	}

	return style;
}

export default class KContent extends React.Component<KContentProps, any> {
	render() {
		return <div style={style(this.props)}>{this.props.children}</div>;
	}
}
