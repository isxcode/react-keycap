import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import Axios from 'axios';
import './Document.sass';

export function Document() {
	const [markdown, setMarkdown] = useState(
		"<div style='width: 400px;height: 500px ;line-height: 500px;margin: auto'><strong style='margin: auto;font-size: 25px'> Welcome to use Spring-oxygen </strong></div>",
	);

	async function getMarkdown(url: string) {
		const result = await Axios.get(url);
		setMarkdown(result.data);
	}

	function Directory() {
		return (
			<div className={'directory-div'}>
				<div className={'directory-content-div'}>
					<ul>
						<li>
							<a
								href={'#'}
								onClick={() => {
									getMarkdown('/api/ispong/spring-oxygen/raw/master/README.md');
								}}
							>
								Quick Start
							</a>
						</li>
						<li>
							<a
								href={'#'}
								onClick={() => {
									getMarkdown(
										'/api/ispong/spring-oxygen/raw/master/README.md',
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
										'/api/ispong/spring-oxygen/raw/master/spring-oxygen-wechatgo/src/main/java/com/ispong/oxygen/wechatgo/README.md',
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
										'/api/ispong/spring-oxygen/raw/master/README.md',
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
					<Markdown>{markdown}</Markdown>
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
