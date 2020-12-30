# Claudia
![Hexo version](https://img.shields.io/badge/hexo%20version-%3E%3D5.0-brightgreen)
![Build Claudia blog](https://github.com/Haojen/Claudia-theme-blog/workflows/Build%20Claudia%20blog/badge.svg?branch=master)
![GitHub issues](https://img.shields.io/github/issues/Haojen/hexo-theme-Claudia)
![GitHub license](https://img.shields.io/github/license/Haojen/hexo-theme-Claudia)


 English | [简体中文](./README-EN.md) 

[Click me to preview demo](https://haojen.github.io/Claudia-theme-blog/)

![cover](./screenshot/claudia-cover.png)

## How to Use

### User's profile

Configure the file `hexo-theme-claudia/_config.yml` under the theme profile

```yaml
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

### Upper-right navigation bar menu config

```yaml
 # main menu navigation
 menu:
   Home: /
   About: /about
   Archives: /archives
```

### Sidebar widget config
```yaml
widgets:
  - tag
  - archive
  - category
  - recent_posts
```

### Comments

#### 1. Utteranc
Documents: https://utteranc.es/

Project repo: https://github.com/utterance/utterances

```yaml
comment_utteranc:
  enable: true
  repo: Haojen/myBlogRepo # change to your blog repo
```

#### 2. DISQUS
developing..

### Code highlighting

1. Disable the default hexo highlight configuration(modify your `root/_config.yml` in root directory of hexo)

```yaml
highlight:
enable: false
```

### Create About Page

Create a new folder `about` under the source of hexo, and then, create a `index.md` file and copy the following content into it.
also you `about.png` put in `about/` folder

```yaml
--
title: about
date: 2017-05-31 10:05:56
layout: about
---

About Somebody
```

### My demo blog config 
https://github.com/Haojen/Claudia-theme-blog

## License
MIT © [haojen ma](http://haojen.github.io/)
