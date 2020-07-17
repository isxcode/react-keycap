import React, { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './KMarkdown.sass';

interface KMarkdownProps {
	children: React.ReactNode;
}

const HComponent = ({children, ...props}: KMarkdownProps) => (
	<div {...props}>{children}</div>
);

const PComponent = ({ children, ...props }: KMarkdownProps) => (
	<div {...props}>{children}</div>
);

const AComponent = ({ children, ...props }: KMarkdownProps) => (
	<a {...props}>{children}</a>
);

export default function KMarkdown(props: { children: React.ReactNode }) {
	useEffect(() => {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	});

	return (
		<Markdown
			options={{
				overrides: {
					h1: {
						component: HComponent,
						props: {
							className: 'markdown-h1',
						},
					},
					h2: {
						component: HComponent,
						props: {
							className: 'markdown-h2',
						},
					},
					h3: {
						component: HComponent,
						props: {
							className: 'markdown-h3',
						},
					},
					h4: {
						component: HComponent,
						props: {
							className: 'markdown-h4',
						},
					},
					h5: {
						component: HComponent,
						props: {
							className: 'markdown-h5',
						},
					},
					h6: {
						component: HComponent,
						props: {
							className: 'markdown-h6',
						},
					},
					p: {
						component: PComponent,
						props: {
							className: 'markdown-p',
						},
					},
					a: {
						component: AComponent,
						props: {
							className: 'markdown-a',
						},
					},
				},
				forceBlock: true,
			}}
		>
			{props.children}
		</Markdown>
	);
}
