import React from 'react';
import './KHeader.sass';

interface KHeaderProps {
	width?: string;
}

export class KHeader extends React.Component<KHeaderProps, any> {
	render(): React.ReactNode {
		return <header className={'key-header-div'}>{this.props.children}</header>;
	}
}
