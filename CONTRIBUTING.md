## Welcome to contribute react-keycap project

Hello! Thank you for taking the time to contribute! If you want to join us, please send email to **ispong@outlook.com**.

#### [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

### Start Project

1. Make Workspace

```shell script
mkdir keycap
```

2. Clone `leo-day-react` and Start

```shell script
cd keycap
git clone -b latest https://github.com/ispong/leo-day-react.git
cd leo-day-react
npm install
npm start
```

3. Clone `react-keycap` and Build

```shell script
cd keycap
git clone -b latest https://github.com/ispong/react-keycap.git
cd react-keycap
npm install
npm link ../leo-day-react/node_modules/react
npm run build
npm link
```

4. Use Local `react-keycap` and Debug

```shell script
cd leo-day-react
npm link @ispong/react-keycap
npm start
```

5. Visit `leo-day-react` Demo Url

```
http://localhost:80/demo
```