---
title: Hexo配置自定义模板
subtitle: Hexo配置自定义模板
tags:
  - hexo
categories: Hexo
banner_img: 'https://gitee.com/ispong/my-images/raw/master/blog-react/page.png'
index_img: 'https://gitee.com/ispong/my-images/raw/master/blog-react/hexo/hexo.png'
excerpt: Hexo配置自定义模板
date: 2020-05-21 11:31:04
---

## 🙋 问题

1. 想使用hexo自动生成文档

## 💡 方法

- 使用Hexo模板功能

添加模板到 `/docs/scaffolds`文件夹中

模板内容
```markdown
---
title: {{ title }}
subtitle: {{ title }}
tags:
  - hexo
categories: Hexo
banner_img: https://gitee.com/ispong/my-images/raw/master/blog-react/page.png
index_img: https://gitee.com/ispong/my-images/raw/master/blog-react/hexo/hexo.png
date: {{ date }}
excerpt: {{ title }} 
hide: true # 隐藏文档，可理解为草稿  删除此行此刻发布
mermaid: true # 是否开启流程图插件 若无流程图需求 删除此行
---

## 🙋 问题

1. xxx

## 💡 方法

- xxx

## 📝 总结

🎈🎈 xxx  🎉🎉🎉

## 🔍 参考

- 无
```

执行生成文档命令(如果模板名为abc.md则mode为abc)
```shell script
cd docs
hexo new [model] 测试文档
hexo new abc 测试abc文档
```

- 文章的标题图片裁剪大小为

```text
336*200
```

## 📝 总结

🎈🎈 使用起来很爽  🎉🎉🎉

## 🔍 参考

- 无
