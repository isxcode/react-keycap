import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Ispong} from './ispong/Ispong';
import {Keycap} from './react-keycap/Keycap';
import {Oxygen} from './spring-oxygen/Oxygen';
import {Test} from './test/Test';

// 通过js去渲染root这个dom
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* 全局路由控制 */}
			<Switch>
				{/* exact表示严格匹配 */}
				<Route path={['/ispong', '/']} component={Ispong} exact />
				<Route path="/react-keycap" component={Keycap} exact />
				<Route path="/spring-oxygen" component={Oxygen} exact />
				<Route path={'/test'} component={Test} exact />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
