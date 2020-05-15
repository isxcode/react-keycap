import React, { CSSProperties } from 'react';
import { customColor } from '../common/colorUtils';
import './KSider.sass';

const kSider: string = 'kSider';

export enum KSiderType {
	LEFT_LINE = 'LEFT_LINE',
}

interface KSiderProps {
	width: string;
	mark: boolean;
	type: string;
}

function style(kSiderProps: KSiderProps) {
	const style: CSSProperties = {};

	if (kSiderProps.mark) {
		style.background = customColor();
	}
	style.width = kSiderProps.width;
	style.height = '100%';
	style.overflowY = 'scroll';
	return style;
}

export default class KSider extends React.Component<KSiderProps, any> {
	render() {
		return (
			<div
				className={kSider.concat('-').concat(this.props.type)}
				style={style(this.props)}
			>
				{this.props.children}
			</div>
		);
	}
}
