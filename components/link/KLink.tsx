import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import './KLink.sass';
import { customColor } from '../common/colorUtils';

const kLink: string = 'kLink';

export enum KLinkMode {
	ROW = 'ROW',
	COLUMN = 'COLUMN',
}

export enum KLinkType {
	// 方形
	SQUARE = 'SQUARE',
}

interface KLinkProps {
	mode: KLinkMode;
	type: KLinkType;
	link: string;
	title: string;
	width: string;
	height: string;
}

function style(kLinkProps: KLinkProps) {
	const style: CSSProperties = {};
	style.width = kLinkProps.width;
	style.height = kLinkProps.height;
	style.lineHeight = kLinkProps.height;
	// style.background = customColor();
	return style;
}

function liStyle(kLinkProps: KLinkProps) {
	const style: CSSProperties = {};
	style.width = kLinkProps.width;
	if (kLinkProps.mode === KLinkMode.ROW) {
		style.display = 'inline-block';
	}
	return style;
}

export default class KLink extends React.Component<KLinkProps, any> {
	render() {
		return (
			<li
				className={kLink
					.concat('-')
					.concat(this.props.type)
					.concat(' ')
					.concat(kLink.concat('-').concat(this.props.mode))}
				style={liStyle(this.props)}
			>
				<Link className={} style={style(this.props)} to={this.props.link}>
					{this.props.title}
				</Link>
			</li>
		);
	}
}
