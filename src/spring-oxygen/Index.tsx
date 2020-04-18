import React from "react";
import './Index.sass';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Footer} from "./footer/Footer";

function Home() {

	return <div>
		<header className={'header-div'}>
			<Header/>
		</header>
		<main className={'main-div'}>
			<Main/>
		</main>
		<footer className={'footer-div'}>
			<Footer/>
		</footer>
	</div>;

}

export function Index() {

	return <Home/>;
}
