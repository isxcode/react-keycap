### eslint 

> 安装eslint
```shell script
npm install eslint --save-dev
```

> 初始化eslint
```shell script
npx eslint --init
```

> react项目配置
```shell script
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? Yes
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Standard: https://github.com/standard/standard
? What format do you want your config file to be in? JavaScript
```

> 配置参数说明 .eslintrc.js
```javascript
module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['plugin:react/recommended', 'standard'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-tabs': 'off', // 启动tab键
		semi: ['error', 'always'], // 分号
		indent: ['error', 'tab'], // 缩进
		'comma-dangle': 'off',
		"space-before-function-paren": "off"
	},
};
```
