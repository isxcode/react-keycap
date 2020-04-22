import React from 'react';
import './Home.sass';
// import Char from "../../components/char/char";
// import Avatar from "../../components/avatar/Avatar";
import githubPng from '../../public/static/img/avatar.png';

function Header() {
	return <div className={'header-div'}>
		<img width={'80px'} height={'80px'} alt={"github"} src={githubPng}/>
		<div>
			<a> 图标 </a>
			<nav>
				<a></a>
				<a></a>
				<a></a>
			</nav>
			<form> </form>
		</div>

	</div>;
}

function Content() {
	return (
		<div className={'content-div'}>
			<div>展示</div>
			<div>功能展示</div>
			<div>具体的demo</div>
			{/*<div className={'dir-div'}>*/}
			{/*	<a className={'link-a'} href={'./spring-oxygen'}>*/}
			{/*		spring-oxygen*/}
			{/*	</a>*/}

			{/*	<a className={'link-a'} href={'./react-keycap'}>*/}
			{/*		react-keycap*/}
			{/*	</a>*/}
			{/*</div>*/}
		</div>
	);
}

function Footer() {
	return <div className={'footer-div'} />;
}

function Index() {
	return (
		<div className={'index-div'}>
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export function Home() {
	return <Index />;
}
