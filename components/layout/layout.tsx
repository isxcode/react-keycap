import React from 'react';
import './style/layout.sass';

export interface BasicProps extends React.HTMLAttributes<HTMLElement> {
	mark?: boolean;
	layout: string;
}

let divIndex = 0;

function divClassName(name: string) {
	return 'keycap-' + name + '-' + divIndex++;
}

function layoutStyle(name: string) {
	return '';
}

export class Layout extends React.Component<BasicProps> {
	style = '';

	render() {
		return (
			<div
				style={layoutStyle(divClassName('layout'))}
				className={divClassName('layout')}
				{...this.props}
			>
				{this.props.children}
			</div>
		);
	}
}

export class Header extends React.Component<BasicProps> {
	render() {
		return (
			<div className={divClassName('header')} {...this.props}>
				{this.props.children}
			</div>
		);
	}
}

export class Content extends React.Component<BasicProps> {
	render() {
		return (
			<div className={divClassName('content')} {...this.props}>
				{this.props.children}
			</div>
		);
	}
}

export class Sider extends React.Component<BasicProps> {
	render() {
		return (
			<div className={divClassName('sider')} {...this.props}>
				{this.props.children}
			</div>
		);
	}
}

export class Footer extends React.Component<BasicProps> {
	render() {
		return (
			<div className={divClassName('footer')} {...this.props}>
				{this.props.children}
			</div>
		);
	}
}
