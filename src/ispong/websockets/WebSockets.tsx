import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { SockJs } from './sockjs/SockJs';
import { Stomp } from './stomp/Stomp';
import { WebSocketApi } from './websocket/WebSocketApi';
import './WebSockets.sass';

export function WebSockets() {
	return (
		<Router>
			<div className={'websocket-nav'}>
				<Link to={'/ispong/webSockets/websocket'}>websocket</Link>
				<Link to={'/ispong/webSockets/stomp'}>stomp</Link>
				<Link to={'/ispong/webSockets/sockJs'}>sockJs</Link>
			</div>
			<br/>
			<div>
				<Switch>
					<Route path={'/ispong/webSockets/websocket'} children={WebSocketApi} />
					<Route path={'/ispong/webSockets/stomp'} children={Stomp} />
					<Route path={'/ispong/webSockets/sockJs'} children={SockJs} />
				</Switch>
			</div>
		</Router>
	);
}
