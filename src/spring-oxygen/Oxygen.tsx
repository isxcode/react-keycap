import React from 'react';
import './Index.sass';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Show } from './show/Show';

function Home() {
	return (
		<div>
			<header className={'header-div'}>
				<Header />
			</header>

			<main className={'main-div'}>
				<Switch>
					<Route path={'/spring-oxygen/show'} exact>
						<Show />
					</Route>
					<Route path={'/spring-oxygen'} exact>
						<Main />
					</Route>
					<Route path={'/'} exact>
						<Main />
					</Route>
				</Switch>
			</main>

			<footer className={'footer-div'}>
				<Footer />
			</footer>
		</div>
	);
}

export function Oxygen() {
	return (
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	);
}
