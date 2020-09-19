## Welcome to contribute react-keycap project

Hello! Thank you for taking the time to contribute! If you want to join us, please send email to **ispong@outlook.com**.

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Here has two project

### react-keycap

this is main project,you can build and use es and lib

### leo-day-react

this is a demo project,you can use and debug react-keycap at your local

## Start Project

- first,clone leo-day-react and start (http://localhost:80)

```shell script
git clone -b latest https://github.com/ispong/leo-day-react.git
cd leo-day-react
npm install
npm start
```

- second,clone react-keycap and build

```shell script
git clone -b latest https://github.com/ispong/react-keycap.git
cd react-keycap
npm link ../leo-day-react/node_modules/react
npm install
npm run build
npm link
```

- third,use react-keycap

```shell script
cd leo-day-react
npm link react-keycap
npm start
```

## Pull request

pull your code to `latest` branch,we will ,don't pull to `main` branch


[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)



Yes please!