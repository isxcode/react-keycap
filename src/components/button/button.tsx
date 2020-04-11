import React from 'react';
import './style/button.sass';

interface buttonProps {
	width?: string;
	height?: string;
	type?: string;
	onclick?: undefined;
	icon?: string;
	onClick?: any;
}

class Button extends React.Component<buttonProps, any> {

	render(): React.ReactNode {
		return (
			<button className={'keycap-button'} onClick={this.props.onClick}>
				{this.props.children}
			</button>
		);
	}
}
export default Button;
