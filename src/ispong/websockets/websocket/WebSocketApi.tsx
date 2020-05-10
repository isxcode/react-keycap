import React from 'react';
import KInput from '../../../../components/input/KInput';
import './WebSocketApi.sass'

let webSocketApi: WebSocket;

function connectWebSocket() {
	webSocketApi = new WebSocket(
		'ws://localhost:8888/spring-oxygen/ws/textSocket?userId=ispong',
	);
}

function closeWebSocket() {
	webSocketApi.onclose = (ev: CloseEvent) => {
		console.log('关闭websocket' + ev.code);
	};
}

function messageWebSocket() {
	webSocketApi.onmessage = (ev: MessageEvent) => {
		console.log(ev.data);
	};
}

function openWebSocket() {
	webSocketApi.onopen = (ev: Event) => {};
}

function errorWebSocket() {
	webSocketApi.onerror = (ev: Event) => {};
}

function testWebSocket() {
	if ('WebSocket' in window) {
		alert('您的浏览器支持 WebSocket!');
	} else {
		alert('您的浏览器不支持 WebSocket!');
	}
}

export function WebSocketApi() {
	return (
		<div className={'websocket-div'}>
			<button onClick={testWebSocket}>test websocket</button>
			<br/>
			<button onClick={connectWebSocket}>connect websocket</button>
			<br/>
			{/*<a>发送websocket</a>*/}
			{/*<a>接受websocket</a>*/}
			<button onClick={closeWebSocket}>close websocket</button>
		</div>
	);
}
