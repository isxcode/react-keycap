// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from 'react';
import Markdown from 'markdown-to-jsx';
import 'highlight.js/styles/github.css';
import './KMarkdown.sass';
import hljs from 'highlight.js';

interface CapMarkdownProps {
	children: ReactNode;
}

const H1Component = ({ children, ...props }: CapMarkdownProps) => (
	<div {...props}>{children}</div>
);

const H2Component = ({ children, ...props }: CapMarkdownProps) => (
	<div {...props}>{children}</div>
);

const H3Component = ({ children, ...props }: CapMarkdownProps) => (
	<div {...props}>{children}</div>
);

const H4Component = ({ children, ...props }: CapMarkdownProps) => (
	<div {...props}>{children}</div>
);

const H5Component = ({ children, ...props }: CapMarkdownProps) => (
	<div {...props}>{children}</div>
);

const H6Component = ({ children, ...props }: CapMarkdownProps) => (
	<div {...props}>{children}</div>
);

const PComponent = ({ children, ...props }: CapMarkdownProps) => (
	<div {...props}>{children}</div>
);

const AComponent = ({ children, ...props }: CapMarkdownProps) => (
	<a {...props}>{children}</a>
);

export default class KMarkdown extends React.Component<any, any> {
	componentDidMount(): void {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	}

	render(): React.ReactNode {
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
				{this.props.children}
			</Markdown>
		);
	}
}
