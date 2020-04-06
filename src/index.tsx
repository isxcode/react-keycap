import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import home from './home/Home';
import spring_oxygen_index from './spring-oxygen/Index';
import react_keycap_index from './react-keycap/Index';

// 这里如入口,傻瓜式开发,拿到首页的div标签root,进行指定渲染,最好配置路由
ReactDOM.render(
	<div>
		<BrowserRouter>
			<Redirect to={'/spring-oxygen'} />
			{/*<Route path='/' component={home} />*/}
			<Route path="/spring-oxygen" component={spring_oxygen_index} />
			<Route path="/react-keycap" component={react_keycap_index} />
		</BrowserRouter>
	</div>,
	document.getElementById('root'),
);
