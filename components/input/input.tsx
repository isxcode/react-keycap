import React, { InputHTMLAttributes } from 'react';
import './style/input.sass';

interface InputProps extends InputHTMLAttributes<any> {
	which?: InputType | undefined;
}

export enum InputType {
	BORDER,
	LINE,
}

function genInputName(props: any) {
	switch (props.which) {
		case InputType.LINE:
			return 'keycap-input-line '.concat(props.className);
		case InputType.BORDER:
			return 'keycap-input-border '.concat(props.className);
	}
	return props.className;
}

export default class Input extends React.Component<InputProps, any> {
	render(): React.ReactNode {
		return (
			<input {...this.props} className={genInputName(this.props)}>
				{this.props.children}
			</input>
		);
	}
}
