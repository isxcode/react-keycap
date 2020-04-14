import React, { CSSProperties } from 'react';
import './style/input.sass';
import { BasicProps, genClassName, genThemeColor } from '../common/common';

export enum InputType {
	// 四边框
	BORDER,

	// 线框
	LINE,
}

interface InputProps extends BasicProps {
	width?: string;
	height?: string;
	className?: string;
	placeholder?: string;
	type?: InputType;
}

function genInputStyle(props: InputProps) {
	let inputStyle: CSSProperties = {};
	inputStyle.width = props.width == null ? '200px' : props.width;
	inputStyle.height = props.height == null ? '20px' : props.height;

	switch (props.type) {
		case InputType.BORDER:
			inputStyle.border = genThemeColor().concat(' solid 1px');
			break;
		case InputType.LINE:
			inputStyle.border = 'none';
			inputStyle.borderBottom = genThemeColor().concat(' solid 1px');
			inputStyle.outline = 'none';
			break;
		default:
			return {};
	}

	return inputStyle;
}

function genComponent(props: any) {
	let className = genClassName('input', props.className as string);
	let style = genInputStyle(props);

	return (
		<input
			className={className}
			style={style}
			placeholder={props.placeholder}
		/>
	);
}

export default class Input extends React.Component<InputProps, any> {
	render(): React.ReactNode {
		return genComponent(this.props);
	}
};
