<h1 align="center">Claudia</h1>
<p align="center"> 
  极简风设计 & 容易的配置, 具备夜间模式, 90+ Lighthouse 分数
</p>

<p align="center">
  <img  alt="Hexo version" src="https://img.shields.io/badge/hexo%20version-%3E%3D5.0-brightgreen">
  <img  alt="Build blog" src="https://github.com/Haojen/Claudia-theme-blog/workflows/Build%20Claudia%20blog/badge.svg?branch=master">
  <img  alt="GitHub issues" src="https://img.shields.io/github/issues/Haojen/hexo-theme-Claudia">
  <img  alt="GitHub license" src="https://img.shields.io/github/license/Haojen/hexo-theme-Claudia">
</p>


<p align="center">
  <span>简体中文 | </span> 
  <a href="README.md" rel="nofollow">English</a>
</p>

<p align="center">
  <a href="https://haojen.github.io/Claudia-theme-blog/" rel="nofollow">Demo</a>
</p>

![cover](./screenshot/claudia-cover-v2.png)

## Changelog

最近更新 [01.08.2021](CHANGELOG.md)


## 使用

### 依赖下载
进入到博客项目根目录下运行：
```bash
#必要
npm install hexo-renderer-pug 
npm install hexo-renderer-sass

#选择性安装
# 如果需要添加订阅功能
npm install hexo-generator-feed
# 流程图功能
npm install hexo-filter-flowchart --save   
# Emoji
npm install hexo-filter-github-emojis --save  
# 搜索功能
npm install hexo-generator-search --save   
# 数学公式
npm install hexo-renderer-mathjax --save
```

## 用户信息配置

注意: 必须在主题的 `_config.yml` 中配置以下信息, 而非博客根目录下的 `_config.yml`

``` yaml
user:
  name: 
  avatar: /images/avatar.jpg
  location:
  description:

# config you SNS
social:
  zhihu:
  twitter:
  facebook:
  linkedin:
  instagram:
  github: haojen

```

### 配置右上角导航栏菜单项

```yaml
 # main menu navigation
 menu:
   Home: /
   About: /about
   Archives: /archives
```

### 边栏部件配置
```yaml
widgets:
  - tag
  - archive
  - category
  - recent_posts
```

### 使用评论系统

#### 1. Utteranc
对应文档地址: https://utteranc.es/

对应项目地址: https://github.com/utterance/utterances

```yaml
comment_utteranc:
  enable: true
  repo: Haojen/myBlogRepo # change to your blog repo
```

#### 2. DISQUS
开发中..


### 夜间模式设置
```yaml
# 1.light 
# 2.dark
# 3.auto (default, match device appearance setting)
appearance: auto
```

## 配置代码高亮

在theme主题目录下, 可以通过 `_config.yml` 文件(注意不是hexo根目录), 配置代码高亮的style, 步骤如下:
首先在您的hexo根目录下 `_config.yml` , 关闭内置的着色器:
```yaml
highlight:
  enable: false
```
然后在主题的 `_config.yml` 中配置 `block_highlight` 字段, 例如:
```yaml
block_highlight: highlight_rainbow
```
目前提供一下几种选择, 并且一旦您关闭内嵌的风格, 最好要选一种:
* highlight_default
* highlight_light
* highlight_github
* highlight_rainbow
* highlight_vs
* highlight_atom

	
## 创建 About 页面
在博客根目录下的 `source` 文件夹里创建一个 `about` 文件夹, 然后打开该文件夹, 新建一个 `index.md`, 打开, 将下面这段文本复制到 `index.md` 里保存

```yaml
---
title: about
date: 2017-05-31 10:05:56
layout: about
---
```


## 创建 Works 页面
创建的方式和上述创建 About 页面相同, 只不过是 `index.md` 内容略有不同, works 页面的 `index.md` 如下:

```yaml
---
title: My Works
date: 2017-05-31 10:05:56
layout: works
---
```

然后再在博客根目录下的 `source` 文件夹下创建一个 `_data` 文件夹, 然后打开, 在里面新建一个 `project.json` 文件

project.json 文件格式范本:
```json
{
	"Apple 官网临摹": {
	"title": "Apple 官网临摹",
	"subTitle": "根据美版apple官网临摹",
	"img_link": "http://o7bkkhiex.bkt.clouddn.com/item-apple.jpg",
	"use" : ["jQuery"],
	"link": "http://haojen.github.io/apple-linmo/",
	"data":"2016.3",
	"direction": "临摹 2016 年三月份 Apple 美版单页面。"
	},
	"Anisina (阿尼丝娜)": {
	"title": "Anisina",
	"subTitle": "基于 Hexo 制作的个人博客主题",
	"img_link": "http://o7bkkhiex.bkt.clouddn.com/Anisina.png",
	"use" : ["jQuery","Bootstrap","Node.js","EJS","Hexo","SASS"],
	"link": "http://haojen.github.io/",
	"data": "2016.5",
	"direction":
		"Hexo 是某位台湾友人基于 Node.js 编写的博客框架"
	}
}

```
	
## 范例项目展示

https://github.com/Haojen/Claudia-theme-blog  

## 💙 最后

如果遇到任何问题, 可以提交 issue , 你的反馈对我很重要!
另外,喜欢的话不妨给个 Star 😍

## License

MIT © [haojen ma](http://haojen.github.io)
