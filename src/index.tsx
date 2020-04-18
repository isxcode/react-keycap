import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Home } from './home/Home';
import {Index as Oxygen} from './spring-oxygen/Index';
// import {Oxygen as Keycap } from './react-keycap/Keycap';

// 写这份代码的目的就是为了将前端工程化,便于维护开发

// 其实react本身就是一个js去写html的框架而已
// ReactDOM.render(<SignIn/>, document.getElementById('root'))
// 上面代码就像是main方法的入口渲染一个叫root的div DOM
// 紧接着就去配置路由,哪些能跳转，哪些不能跳转，其实就是指定function的方法体

function InitRouter() {
	return (
		<BrowserRouter>
			<Switch>
				{/*<Route path="/" component={Home} exact/>*/}
				<Route path="/" component={Oxygen} exact/>
				<Route path={'/spring-oxygen'} component={Oxygen}/>
				{/*<Route path={'/react-keycap'} component={Keycap}/>*/}
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<InitRouter />, document.getElementById('root'));
