import React, {useState} from 'react';
import './Document.sass';
import Markdown from 'markdown-to-jsx';
import 'highlight.js/styles/github.css';
import {KAxios} from "../../../scripts/http/KAxios";
import {KUrl} from "../../../scripts/http/KUrl";
import {KApi} from "../../../scripts/http/KApi";
import KMarkdown from "../../../components/markdown/KMarkdown";

export function Document() {

	const [markdown, setMarkdown] = useState("");

	async function getMarkdown(url: string) {
		let res = await KAxios.doStringGet(KUrl.define, KApi.cors, {url: url});
		setMarkdown(res);
	}

	function Directory() {
		return (
			<div className={'directory-div'}>
				<div className={'directory-content-div'}>
					<ul>
						<li>
							<a
								href={'#'}
								onClick={() => {getMarkdown('https://gitee.com/ispong/spring-oxygen/raw/master/README.md');}}
							>
								Quick Start
							</a>
						</li>
						<li>
							<a
								href={'#'}
								onClick={() => {
									getMarkdown(
										'https://gitee.com/ispong/spring-oxygen/raw/master/README.md',
									);
								}}
							>
								flysql
							</a>
						</li>
						<li>
							<a
								href={'#'}
								onClick={() => {
									getMarkdown(
										'https://gitee.com/ispong/spring-oxygen/raw/master/spring-oxygen-wechatgo/src/main/java/com/ispong/oxygen/wechatgo/README.md',
									);
								}}
							>
								wechatgo
							</a>
						</li>
						<li>
							<a
								href={'#'}
								onClick={() => {
									getMarkdown(
										'https://gitee.com/ispong/spring-oxygen/raw/master/README.md',
									);
								}}
							>
								freecode
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}

	function Doc() {
		return (
			<div className={'doc-div'}>
				<div className={'doc-content-div'}>
					<KMarkdown>{markdown}</KMarkdown>
				</div>
			</div>
		);
	}

	return (
		<div className={'document-div'}>
			<Directory />
			<Doc />
		</div>
	);
}
