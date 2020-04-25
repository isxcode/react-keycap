import React from 'react';
import './Main.sass';
import {Link} from "react-router-dom";

// 展示栏目-show
function Show() {
	return (
		<div className={'show-div'}>
			<div className={'show-content-div'}>
				<strong className={'show-content-strong'}>
					Spring rapid development integration framework
				</strong>
				<Link to={'/spring-oxygen/show'} className={'show-start-a'}>
					QUICKSTART
				</Link>
			</div>
		</div>
	);
}

// 新功能提醒-new
function New() {
	return (
		<div className={'new-div'}>
			<div className={'new-content-div'}>
				<div className={'new-lab-div'}>NEWS</div>
				<a className={'new-link-a'} href={'./'}>
					Publish: Welcome to use Spring-oxygen for your Project
				</a>
			</div>
			<hr className={'new-hr'}/>
		</div>
	);
}

// 功能说明-feature
function Feature() {
	return (
		<div className={'feature-div'}>
			<div className={'feature-content-div'}>
				<div className={'feature-one-div'}>
					<h2 className={'feature-h'}> oxygen-flysql</h2>
					<p className={'feature-p'}>
						Integrate spring jdbc rapid development.
					</p>
				</div>
				<div className={'feature-one-div'}>
					<h2 className={'feature-h'}> oxygen-wechatgo</h2>
					<p className={'feature-p'}>
						Integrate WeChat platform rapid development.
					</p>
				</div>
				<div className={'feature-one-div'}>
					<h2 className={'feature-h'}>oxygen-freecode</h2>
					<p className={'feature-p'}>
						Fast generate java code.
					</p>
				</div>
			</div>
		</div>
	);
}

// main部分的代码
export function Main() {
	return (
		<div>
			<Show />
			<New />
			<Feature />
		</div>
	);
}
