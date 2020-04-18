import React from 'react';
import './Header.sass';
import springPng from '../../../public/static/img/spring.png';

function Logo() {
	return (
		<a className={'logo-a'}>
			<img src={springPng} alt={'spring'} />
			<strong>spring-oxygen</strong>
		</a>
	);
}

function Items() {
	return (
		<div className={'items-nav'}>
			<ul>
				<li>
					<a href={'./'}>Docs</a>
				</li>
				<li>
					<a href={'./'}>Help</a>
				</li>
				<li>
					<a href={'./'}>Github</a>
				</li>
			</ul>
		</div>
	);
}

export function Header() {
	return (
		<nav className={'nav'}>
			<Logo/>
			<Items/>
		</nav>
	);
}
