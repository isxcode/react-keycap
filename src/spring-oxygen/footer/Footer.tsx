import React from 'react';
import './Footer.sass';
import {Link} from "react-router-dom";

function Links() {
	return (
		<div className={'links-div'}>
			<div className={'links-one-div'}>
				<strong>Docs</strong>
				<ul>
					<li><Link to={'/spring-oxygen/document'}><a href={'#'}>Get Started</a></Link></li>
					<li><a href={'https://spring.io/'} target={'_blank'}>Learn Spring</a></li>
				</ul>
			</div>
			<div className={'links-one-div'}>
				<strong>Community</strong>
				<ul>
					<li><a href={'https://github.com/ispong/spring-oxygen'} target={'_blank'}>GitHub</a></li>
				</ul>
			</div>
			<div className={'links-one-div'}>
				<strong>Social</strong>
				<ul>
					<li><a href={'https://github.com/ispong/spring-oxygen'} target={'_blank'}>GitHub</a></li>
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
