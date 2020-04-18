import React, { ButtonHTMLAttributes } from 'react';
import './style/button.sass';

interface ButtonProps extends ButtonHTMLAttributes<any> {
	which?: ButtonType;
}

export enum ButtonType {
	BIG,
	NORMAL,
}

function genButtonName(props: any) {
	switch (props.which) {
		case ButtonType.BIG:
			return 'keycap-button-big '.concat(props.className);
		case ButtonType.NORMAL:
			return 'keycap-button-normal '.concat(props.className);
	}
	return props.className;
}

export default class Button extends React.Component<ButtonProps, any> {
	render(): React.ReactNode {
		return (
			<button {...this.props} className={genButtonName(this.props)}>
				{this.props.children}
			</button>
		);
	}
}
