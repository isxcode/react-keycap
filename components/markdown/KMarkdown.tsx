import React, { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './KMarkdown.sass';

interface KMarkdownProps {
	children: React.ReactNode;
}

const H1Component = ({ children, ...props }: KMarkdownProps) => (
	<div {...props}>{children}</div>
);

const H2Component = ({ children, ...props }: KMarkdownProps) => (
	<div {...props}>{children}</div>
);

const H3Component = ({ children, ...props }: KMarkdownProps) => (
	<div {...props}>{children}</div>
);

const H4Component = ({ children, ...props }: KMarkdownProps) => (
	<div {...props}>{children}</div>
);

const H5Component = ({ children, ...props }: KMarkdownProps) => (
	<div {...props}>{children}</div>
);

const H6Component = ({ children, ...props }: KMarkdownProps) => (
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
						component: H1Component,
						props: {
							className: 'markdown-h1',
						},
					},
					h2: {
						component: H2Component,
						props: {
							className: 'markdown-h2',
						},
					},
					h3: {
						component: H3Component,
						props: {
							className: 'markdown-h3',
						},
					},
					h4: {
						component: H4Component,
						props: {
							className: 'markdown-h4',
						},
					},
					h5: {
						component: H5Component,
						props: {
							className: 'markdown-h5',
						},
					},
					h6: {
						component: H6Component,
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
