import React from 'react';
import './Index.sass';
import {
	Layout,
	Header,
	Footer,
	Content,
	Sider,
} from '../../components/layout/layout';

export default class Index extends React.Component {
	render() {
		return (
			<Layout layout={'100'}>
				<Header className={'cus-header'} layout={'10'} mark={true}>
					header
				</Header>
				<Content layout={'40'}>
					<Sider layout={'40'}>sider</Sider>
					content
				</Content>
				<Footer layout={'40'}>footer</Footer>
			</Layout>

			// <Layout>
			//
			// 	<div className={'header'}>
			//
			// 	</div>
			//
			// 	<div className={'content'}>
			//
			// 		<div className={'sider'}></div>
			// 		<div className={'sider-content'}>
			// 			<div className={'sider-content-header'}></div>
			// 			<div className={'sider-content-content'}>
			// 				<div className={'sider-content-footer-sider'}></div>
			// 				<div className={'sider-content-footer-content'}>
			// 					<div className={'sider-content-footer-content-header'}></div>
			// 					<div className={'sider-content-footer-content-footer'}>
			// 						<div className={'sider-content-footer-content-footer-sider'}></div>
			// 						<div className={'sider-content-footer-content-footer-content'}></div>
			// 					</div>
			// 				</div>
			// 			</div>
			// 			<div className={'sider-content-footer'}>
			// 			</div>
			// 		</div>
			// 	</div>
			//
			// 	<div className={'footer'}>
			//
			// 	</div>
			//
			// </Layout>
		);
	}
}
