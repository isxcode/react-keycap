import React from 'react';
import './Footer.sass';

function Links() {
	return (
		<div className={'links-div'}>
			<div className={'links-one-div'}>
				<strong>Docs</strong>
				<ul>
					<li><a href={'./'}>Get Started</a></li>
					<li><a href={'./'}>Learn Spring</a></li>
				</ul>
			</div>
			<div className={'links-one-div'}>
				<strong>Community</strong>
				<ul>
					<li><a href={'./'}>GitHub</a></li>
				</ul>
			</div>
			<div className={'links-one-div'}>
				<strong>Social</strong>
				<ul>
					<li><a href={'./'}>GitHub</a></li>
				</ul>
			</div>
		</div>
	);
}

function Right() {
	return (
		<div className={'right-div'}>
			<strong className={'right-content-strong'}>Copyright © 2020 ispong .</strong>
		</div>
	);
}

export function Footer() {
	return (
		<div>
			<Links />
			<Right />
		</div>
	);
}
