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
npm install && npm run local
```

4. Install Local

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

[https://github.com/isxcode/react-keycap/compare](https://github.com/isxcode/react-keycap/compare)

> Note:  ispong/react-keycap/latest  **==squash merge==>** isxcode/react-keycap/latest

### Build docs

```bash
npm i docsify-cli -g
cd react-keycap
docsify serve docs
```

[http://localhost:3000](http://localhost:3000)

### Build BookStory

```bash
npm run storybook
```

[http://localhost:6006](http://localhost:6006)

### Publish

#### publish alpha to Npm repository 

```bash
vim VERSION.md

# -------------- VERSION.md --------------  
1.0.0-alpha
# -------------- VERSION.md -------------- 
```

```bash
vim gradle.properties

# ------------- vim .npmrc -------------  
registry=https://registry.npmjs.org/
# ------------- gradle.properties -------------
```

```bash
npm login 
npm run upload
```

#### publish RELEASE to Npm repository

```bash
vim VERSION.md

# -------------- VERSION.md --------------  
1.0.0
# -------------- VERSION.md -------------- 
```

```bash
vim gradle.properties

# ------------- vim .npmrc -------------  
registry=https://registry.npmjs.org/
# ------------- gradle.properties -------------
```

```bash
npm login 
npm run upload
```

#### publish RELEASE to GitHub repository

[https://github.com/isxcode/react-keycap/actions/workflows/release-github.yml](https://github.com/isxcode/react-keycap/actions/workflows/release-github.yml)

### Release new version

- [ ] Fix Pull Request
- [ ] Edit VERSION.md version number
- [ ] Edit SECURITY.md version number
- [ ] Edit CHANGELOG.md version number
- [ ] Submit and Fix GitHub Security
- [ ] Check project badge status
- [ ] Create GitHub new tag and new branch
- [ ] Run GitHub action publish to GitHub repository
- [ ] Run GitHub action publish new version docs
- [ ] Publish to Sonatype repository