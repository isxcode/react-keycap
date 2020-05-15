import React, { CSSProperties } from 'react';

const kMenu: string = 'kMenu';

export enum kMenuType {
	ROW = 'ROW',
	COLUMN = 'COLUMN',
}

interface KMenuProps {
	// mode: kMenuType;
}

export type MenuTheme = 'light' | 'dark';

function style(kMenuProps: KMenuProps) {
	const style: CSSProperties = {};
	style.listStyle = 'none';
	style.marginBlockStart = '0';
	style.marginBlockEnd = '0';
	style.marginInlineStart = '0';
	style.marginInlineEnd = '0';
	style.paddingInlineStart = '0';
	return style;
}

export default class KMenu extends React.Component<KMenuProps, any> {
	render() {
		return (
			<ul
				// className={kMenu.concat('-').concat(this.props.mode)}
				style={style(this.props)}
			>
				<li>
					<div></div>
					<>
				</li>
			</ul>
		);
	}
}
