---
title: Hexo+GiteePage+Fluid搭建免费的个人博客
subtitle: Hexo+GiteePage+Fluid搭建免费的个人博客
tags:
  - hexo
categories: Hexo
banner_img: 'https://gitee.com/ispong/my-images/raw/master/blog-react/page.png'
index_img: 'https://gitee.com/ispong/my-images/raw/master/blog-react/hexo/hexo.png'
excerpt: Hexo+GiteePage+Fluid搭建免费的个人博客
date: 2020-05-21 11:29:49
---

## 🙋 问题

1. 想搞自己的博客
2. 开源项目开发中，难免会有写作的渴望,可无法共享
3. 自己写的文档太随意

## 💡 方法

### 写成博客展示出来,可以约束自己的任性。

### 安装Hexo

**前提**

- 安装NodeJs 
- 安装Git

1. 安装Hexo

```shell script
npm install -g hexo-cli
```

2. 初始化hexo文档文件夹

```shell script
cd xxx # 你喜欢的地址
hexo init docs
cd docs
npm install
```

3. 本地运行hexo [Hexo本地访问地址](http://localhost:4000)

```shell script
hexo server
```

4. 安装Fluid主题

[链接-下载Fluid主题](https://github.com/fluid-dev/hexo-theme-fluid/archive/v1.8.0.zip)

下载后解压到 /docs/themes/ 目录下并重命名为 fluid

修改配置文件 /docs/themes/_config.yml
```yaml
theme: fluid  # 指定主题
```

5. 创建Gitee代码仓库,只需要填写name 并设置Property为Public即可，提前请优先注册账号 [Gitee](https://gitee.com/)

![img](https://gitee.com/ispong/my-images/raw/master/blog-react/hexo/115319.png)

6. 安装插件 hexo-deployer-git

```shell script
npm install hexo-deployer-git --save
```

修改配置文件 /docs/themes/_config.yml

```yaml
deploy:
  type: git
  repo: https://gitee.com/ispong/blog-react.git
  branch: master
  message: update blogs
```

提交代码
```shell script
cd docs
hexo clean && hexo deploy
```

7. 部署代码到Gitee

点击图中 Gitee Pages 图标
![img](https://gitee.com/ispong/my-images/raw/master/blog-react/hexo/115719.png)

点击图中 Update 按钮即可发布
![img](https://gitee.com/ispong/my-images/raw/master/blog-react/hexo/115825.png)


8. 访问自己的博客

[blog-react](https://ispong.gitee.io/blog-react/)

![img](https://gitee.com/ispong/my-images/raw/master/blog-react/hexo/120021.png)

## 📝 总结

🎈🎈 顺利的话,10分钟就是搭建自己的博客.其实还是比较划算的，感觉上和使用印象笔记写文档差不了太多  🎉🎉🎉

## 🔍 参考

- [Hexo](https://hexo.io/)
- [Fluid](https://hexo.fluid-dev.com/docs/en/)
- [GItee](https://gitee.com/)
