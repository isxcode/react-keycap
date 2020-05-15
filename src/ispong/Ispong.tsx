// 个人主页 负责部分功能的展示
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Todo } from './todo/Todo';
import { WebSockets } from './websockets/WebSockets';
import KLink, { KLinkMode, KLinkType } from '../../components/link/KLink';
import KLayout, { kLayoutType } from '../../components/layout/KLayout';
import KSider, { KSiderType } from '../../components/layout/KSider';
import KContent from '../../components/layout/KContent';
import KMenu from '../../components/menu/KMenu';

// 对象-负责约束实体
export class LabelInfo {
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
			<KLayout mode={kLayoutType.ROW}>
				<KSider width={'15%'} type={KSiderType.LEFT_LINE} mark={false}>
					<KMenu>
						<KSubMenu>

						</KSubMenu>
						<KItem>

						</KItem>
						{labelList.map((label, index) => (
							<KLink
								key={index}
								type={KLinkType.SQUARE}
								link={label.link}
								title={label.title}
								width={'60%'}
								height={'40px'}
							/>
						))}
					</KMenu>
				</KSider>
				<KContent width={'85%'} mark={false}>
					<Switch>
						{labelList.map((route, index) => (
							<Route key={index} path={route.link} children={route.main}/>
						))}
					</Switch>
				</KContent>
			</KLayout>
		</Router>
	);
}
