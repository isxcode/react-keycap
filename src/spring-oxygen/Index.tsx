import React from 'react';
import './Index.sass';

export default class Index extends React.Component {
	render() {
		return (
			<div className={'index'}>
				<div className={'header'}> header</div>
				<div className={'content'}>content</div>
				<div className={'foot'}>foot</div>
			</div>
		);
	}
}
