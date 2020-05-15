import React, { CSSProperties } from 'react';
import { customColor } from '../common/colorUtils';

interface KHeaderProps {
	height: string;
	mark: boolean;
}

function style(kHeaderProps: KHeaderProps) {
	const style: CSSProperties = {};

	if (kHeaderProps.mark) {
		style.background = customColor();
	}
	style.height = kHeaderProps.height;
	style.width = '100%';
	style.overflow = 'hidden';
	return style;
}

export default class KHeader extends React.Component<KHeaderProps, any> {
	render() {
		return <div style={style(this.props)}>{this.props.children}</div>;
	}
}
