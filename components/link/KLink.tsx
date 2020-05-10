import React from 'react';
import { Link } from 'react-router-dom';
import './KLink.sass';

interface KLinkProps {
	link: string;
	type: string;
	title: string;
}

export default class KLink extends React.Component<KLinkProps, any> {
	render() {
		return (
			<li>
				<Link className={'kLink-'.concat(this.props.type)} to={this.props.link}>{this.props.title}</Link>
			</li>
		);
	}
}
