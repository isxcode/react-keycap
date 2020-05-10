import React from 'react';
import './Test.sass';
import { Link } from 'react-router-dom';
import SpringPng from '../../public/static/img/spring.png';

// 由于项目的结构都是一样的 通过数据驱动前端
// const KLogoParam = {
// 	logoType: 'oxygen',
// 	logoImg: {
// 		src: SpringPng,
// 		alt: 'SpringOxygen',
// 	},
// 	logoTitle: {
// 		title: 'SpringOxygen',
// 		linkUrl: 'http://localhost:9999',
// 	},
// };
//
// export function Test() {
// 	return (
// 		<div className={KLogoParam.logoType.concat('-div')}>
// 			<img
// 				className={KLogoParam.logoType.concat('-img')}
// 				src={KLogoParam.logoImg.src}
// 				alt={KLogoParam.logoImg.alt}
// 			/>
// 			<Link
// 				className={KLogoParam.logoType.concat('-link')}
// 				to={KLogoParam.logoTitle.linkUrl}
// 			>
// 				{KLogoParam.logoTitle.title}
// 			</Link>
// 		</div>
// 	);
// }

// let websocket = new WebSocket("http://localhost:8888/spring-oxygen/ws/websocket");

// 连接websocket
// function connect() {
//
// 	if ("WebSocket" in window) {
// 		alert("您的浏览器支持 WebSocket!");
//
// 		ws.onopen = function () {
// 			// Web Socket 已连接上，使用 send() 方法发送数据
// 			ws.send("发送数据");
// 			alert("数据发送中...");
// 		};
//
// 		ws.onmessage = function (evt) {
// 			var received_msg = evt.data;
// 			console.log("数据已接收..." + received_msg);
// 		};
//
// 		ws.onclose = function () {
// 			// 关闭 websocket
// 			alert("连接已关闭...");
// 		};
// 	} else {
// 		// 浏览器不支持 WebSocket
// 		alert("您的浏览器不支持 WebSocket!");
// 	}
// }
export function Test() {

	return <div>
		<a>测试是否支持 websocket</a>
		<a>测试连接 websocket</a>
		<a>测试发送 websocket</a>
		<a>接受websocket信息</a>
		<a>当前websocket状态</a>
		<a>关闭websocket</a>
	</div>;

}


