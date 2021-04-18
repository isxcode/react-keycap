## Welcome to contribute React Keycap

Hello! Thank you for taking the time to contribute! If you want to join us, please send email to **ispong@outlook.com**.

#### [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

---

### Installation Prerequisites

- Git 2.22.+
- Node 12.16.+
- Npm 6.13.+

### Contribute (Example developer:**ispong** )

1. Fork Project (_https://github.com/isxcode/react-keycap_)

2. Clone Project (Branch: **latest**)

```bash
git clone -b latest https://github.com/ispong/react-keycap.git
```

3. Build Project

```bash
cd react-keycap
npm install && npm run build
```

Note:
> If use npm link in local, you should link your project react and react-dom to react-keycap first </br>
> react and react-dom version must be in the same
> npm link must be run first

```bash
cd react-keycap
npm link
npm install
npm link /project/node_modules/react
npm link /project/node_modules/react-dom
npm run build
```

4. Install Local ([Example](https://react-keycap.isxcode.com/#/en-us/1-1-Init-React-Project))

```bash
npm link @isxcode/react-keycap
```

5. Merge conflict (Branch: **latest**)

```bash
git remote add upstream https://github.com/isxcode/react-keycap.git
git fetch upstream
git merge upstream/latest
git add .
git commit -m ":sparkles: add new features"
git push origin latest
```

6. Pull Request

- https://github.com/isxcode/react-keycap/compare

> Note:  ispong/react-keycap/latest  **==squash merge==>** isxcode/react-keycap/latest

7. Build Docs

- http://localhost:3000

```bash
npm i docsify-cli -g
cd react-keycap
docsify serve docs
```

8. Run BookStory

- http://localhost:6006

```bash
npm run storybook
```

"publish": "npm publish --access public"