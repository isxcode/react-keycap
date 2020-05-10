// 个人主页 负责部分功能的展示
import React from 'react';
import './Ispong.sass';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Todo } from './todo/Todo';
import { WebSockets } from './websockets/WebSockets';
import KLink from '../../components/link/KLink';

// 对象-负责约束实体
class LabelInfo {
	// 连接地址
	link: string;
	// 连接的名称
	title: string;
	// 显示部分
	main: React.ReactNode;
}

// 数据驱动前端
let labelList: LabelInfo[] = [
	{ link: '/ispong/todo', title: 'todo', main: <Todo /> },
	{ link: '/ispong/webSockets', title: 'webSocket', main: <WebSockets /> },
];

// 主要入口
export function Ispong() {
	return (
		// 路由包裹div
		<Router>
			<div className={'ispong-div'}>
				{/* 路由显示部分 */}
				<div className={'nav-left'}>
					<ul>
						{labelList.map((label, index) => (
							<KLink
								key={index}
								type={'square'}
								link={label.link}
								title={label.title}
							/>
						))}
					</ul>
				</div>
				{/* 内容显示部分 */}
				<div className={'ispong-content'}>
					<Switch>
						{labelList.map((route, index) => (
							<Route key={index} path={route.link} children={route.main}/>
						))}
					</Switch>
				</div>
			</div>
		</Router>
	);
}
