## Welcome to contribute React Keycap

Hello! Thank you for taking the time to contribute! If you want to join us, please send email to **ispong@outlook.com**.

#### [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

### Installation Prerequisites

- Git 2.22.+
- Node 12.16.+
- Npm 6.13.+

### Contribute (developer : _ispong_)

1. Fork Project (https://github.com/isxcode/react-keycap)

your project - https://github.com/ispong/react-keycap

2. Clone Project (branch: **latest**)

```
git clone -b latest https://github.com/ispong/react-keycap.git
```

3. Build Project and Install Local and Use

- for Npm

```shell script
cd react-keycap
npm install && npm run build
```

Note: If npm link in local, you should link your project react-env to react-keycap

```shell script
cd react-keycap
npm install
npm link /project/node_modules/react
npm link /project/node_modules/react-dom
npm run build
npm link
```

4. Merge conflict (branch: **latest**)

```
git remote add upstream https://github.com/isxcode/react-keycap.git
git fetch upstream
git merge upstream/latest
git push origin latest
```

5. Pull Request

- https://github.com/isxcode/react-keycap/compare

> Note:  ispong/react-keycap/latest  **==squash merge==>** isxcode/react-keycap/latest

6. Merge Rule (**Optional**)

Branch flow                                                                  | Operate
 ----                                                                        | ---
ispong/react-keycap/feature-core --> isxcode/react-keycap/feature-core       | squash merge
isxcode/react-keycap/feature-core --> ispong/react-keycap/feature-core       | merge commits
isxcode/react-keycap/feature-core --> isxcode/react-keycap/release-0.0.x     | merge commits
isxcode/react-keycap/release-0.0.x --> isxcode/react-keycap/feature-flysql   | squash merge
isxcode/react-keycap/release-0.0.x --> isxcode/react-keycap/main             | rebase merge
isxcode/react-keycap/hotfix-0.0.x --> isxcode/react-keycap/release-0.0.x     | merge commits

7. Docs Contribute

```
cd react-keycap
docsify serve docs
```

- [local docs](http://localhost:3000)
