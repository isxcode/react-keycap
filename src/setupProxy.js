// 本地有效 需要看远程的服务器属性
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'https://gitee.com',
			changeOrigin: true,
			ws: true,
			pathRewrite: {
				'^/api': ''
			},
		}),
	);
};
