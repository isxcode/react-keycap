import React from 'react';
import './Header.sass';
import springPng from '../../../public/static/img/spring.png';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<Link className={'logo-a'} to={'/spring-oxygen'}>
				<img src={springPng} alt={'spring'} />
				<strong>spring-oxygen</strong>
		</Link>
	);
}

function Items() {
	return (
		<div className={'items-nav'}>
			<ul>
				<li>
					<Link to={'/spring-oxygen/show'}>
						Docs
					</Link>
				</li>
				<li>
					<a
						href={'https://github.com/ispong/spring-oxygen/issues'}
						target={'_blank'}
					>
						Help
					</a>
				</li>
				<li>
					<a href={'https://github.com/ispong/spring-oxygen'} target={'_blank'}>
						Github
					</a>
				</li>
			</ul>
		</div>
	);
}

export function Header() {
	return (
		<nav className={'nav'}>
			<Logo />
			<Items />
		</nav>
	);
}
