// /*
//  * 实现的思想就 包装div  设置className  动态生成指定style样式
//  * */
// import React from 'react';
// import './style/layout.sass';
//
// function customColor() {
// 	return (
// 		'#' +
// 		Math.floor(Math.random() * 256).toString(16) +
// 		Math.floor(Math.random() * 256).toString(16) +
// 		Math.floor(Math.random() * 256).toString(16)
// 	);
// }
//
// // 创建可以设置的属性
// export interface BasicProps extends React.HTMLAttributes<HTMLElement> {
// 	mark?: boolean;
// 	layout?: string;
// }
//
// // let divIndex = 0;
//
// // 按规则生成div的className
// function initDivClassName(name: string) {
// 	if (name === 'layout') {
// 		return 'keycap-layout';
// 	}
//
// 	return 'keycap-' + name;
// }
//
// // layout标签默认样式
// const layoutBasicStyle = {
// 	top: 0,
// 	bottom: 0,
// 	// height: '100%',
// 	width: '100%',
// 	position: 'absolute',
// 	background: customColor(),
// };
//
// // 按照className生成样式(传递对象)
// function layoutStyle() {
// 	return layoutBasicStyle;
// }
//
// // layout主体开始
// export class Layout extends React.Component<BasicProps> {
// 	render() {
// 		const divClassName = initDivClassName('layout');
//
// 		return (
// 			<div className={divClassName} style={layoutStyle()}>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }
//
// // 头部组件
// export class Header extends React.Component<BasicProps> {
// 	render() {
// 		const divClassName = initDivClassName('header');
//
// 		return (
// 			<div className={divClassName} style={layoutStyle()}>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }
//
// // 主体组件
// export class Content extends React.Component<BasicProps> {
// 	render() {
// 		const divClassName = initDivClassName('content');
//
// 		return (
// 			<div className={divClassName} style={layoutStyle()}>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }
//
// // 边栏
// export class Sider extends React.Component<BasicProps> {
// 	render() {
// 		const divClassName = initDivClassName('sider');
//
// 		return (
// 			<div className={divClassName} style={layoutStyle()}>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }
//
// // 脚低
// export class Footer extends React.Component<BasicProps> {
// 	render() {
// 		const divClassName = initDivClassName('footer');
//
// 		return (
// 			<div className={divClassName} style={layoutStyle()}>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }
