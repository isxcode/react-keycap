import React, { CSSProperties } from 'react';
import './KLayout.sass';

export enum kLayoutType {
	ROW = 'ROW',
	COLUMN = 'COLUMN',
}

interface KLayoutProps {
	mode: string;
}

function style(kLayoutProps: KLayoutProps) {
	const style: CSSProperties = {};
	style.width = '100%';
	style.height = '100%';
	if (kLayoutProps.mode === kLayoutType.ROW) {
		style.display = 'flex';
	}
	return style;
}

export default class KLayout extends React.Component<KLayoutProps, any> {
	render() {
		return <div style={style(this.props)}>{this.props.children}</div>;
	}
}
