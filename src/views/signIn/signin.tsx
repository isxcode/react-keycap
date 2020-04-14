import React from 'react';
import './style/signIn.sass';
// import Char from '../../components/char/char';
import Input, { InputType } from '../../components/input/input';
import Button from "../../components/button/button";

export default class SignIn extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	render(): React.ReactNode {
		return (
			<div className={'div-signIn'}>
				<Input
					className={'input-username'}
					type={InputType.BORDER}
					placeholder={'username'}
				/>
				<Button label={"test"}/>
			</div>
		);
	}
}
