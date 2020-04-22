// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from 'react';
import Markdown from 'markdown-to-jsx';
import './CapMarkdown.sass';

interface CapMarkdownProps {
	children: ReactNode;
}

const H1Component = ({ children, ...props }: CapMarkdownProps) => (
	<div className={'markdown-h1'} {...props}>
		{children}
	</div>
);

const H2Component = ({ children, ...props }: CapMarkdownProps) => (
	<div className={'markdown-h2'} {...props}>
		{children}
	</div>
);

export default class CapMarkdown extends React.Component<any, any> {
	render(): React.ReactNode {
		return (
			<Markdown
				options={{
					overrides: {
						h1: {
							component: H1Component,
							props: {
								classname: 'markdown-h1',
							},
						},
						h2: {
							component: H2Component,
							props: {
								classname: 'markdown-h2',
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
