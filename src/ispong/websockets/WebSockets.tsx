import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {SockJs} from './sockjs/SockJs';
import {Stomp} from './stomp/Stomp';
import {WebSocketApi} from './websocket/WebSocketApi';
import KLayout, {kLayoutType} from '../../../components/layout/KLayout';
import KContent from '../../../components/layout/KContent';
import {LabelInfo} from '../Ispong';
import KLink, {KLinkMode, KLinkType} from '../../../components/link/KLink';
import KMenu from '../../../components/menu/KMenu';
import KHeader from '../../../components/layout/KHeader';

let labelList: LabelInfo[] = [
	{
		link: '/ispong/webSockets/websocket',
		title: 'websocket',
		main: <WebSocketApi />,
	},
	{ link: '/ispong/webSockets/stomp', title: 'stomp', main: <Stomp /> },
	{ link: '/ispong/webSockets/sockJs', title: 'sockJs', main: <SockJs /> },
];

export function WebSockets() {
	return (
		<Router>
			<KLayout mode={kLayoutType.COLUMN}>
				<KHeader height={'40%'} mark={true}>
					<KMenu>
						{labelList.map((label, index) => (
							<KLink
								mode={KLinkMode.ROW}
								key={index}
								type={KLinkType.SQUARE}
								link={label.link}
								title={label.title}
								width={'50px'}
								height={'40px'}
							/>
						))}
					</KMenu>
				</KHeader>
				<KContent mark={false} height={'60%'}>
					<Switch>
						{labelList.map((route, index) => (
							<Route key={index} path={route.link} children={route.main} />
						))}
					</Switch>
				</KContent>
			</KLayout>
		</Router>
	);
}
