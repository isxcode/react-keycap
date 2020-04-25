import React, {useEffect, useRef, useState} from 'react';
import {KAxios} from '../../scripts/http/KAxios';
import {KUrl} from '../../scripts/http/KUrl';
import {KApi} from '../../scripts/http/KApi';
import KMarkdown from "../../components/markdown/KMarkdown";

export function Test() {
	const [content, hhh] = useState('我是我');

	async function doIt(url: string) {
		// 调用接口返回值
		// BaseRe
		// sponse response = KAxios.doGet(KUrl.define, KApi.cors, {"": ""});
		let res = await KAxios.doStringGet(KUrl.define, KApi.cors, {url: url});
		hhh(res);
	}

	return (
		<div>
			<KMarkdown>{content}</KMarkdown>
			<br/>
			<button
				onClick={() => {
					doIt("https://gitee.com/ispong/spring-oxygen/raw/master/README.md");
				}}
			>
				点我试试
			</button>
			<button
				onClick={() => {
					doIt("https://gitee.com/ispong/spring-oxygen/raw/master/spring-oxygen-wechatgo/src/main/java/com/ispong/oxygen/wechatgo/README.md");
				}}
			>
				点我试试
			</button>
		</div>
	)
}
