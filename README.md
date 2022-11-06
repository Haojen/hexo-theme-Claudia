<h1 align="center">Claudia</h1>
<p align="center"> 
  Concisely designed & easy to config, match device dark mode, 90+ Lighthouse scoring
</p>

<p align="center">
  <img  alt="Hexo version" src="https://img.shields.io/badge/hexo%20version-%3E%3D%204.2-brightgreen">
  <img  alt="GitHub issues" src="https://img.shields.io/github/issues/Haojen/hexo-theme-Claudia">
  <img  alt="GitHub license" src="https://img.shields.io/github/license/Haojen/hexo-theme-Claudia">
</p>

<p align="center">
  <a href="https://haojen.github.io/Claudia-theme-blog/" rel="nofollow">Demo</a>
</p>

<p align="center">
  <span>English | </span> 
  <a href="README-CN.md" rel="nofollow">简体中文</a>
</p>

![cover](./screenshot/claudia-cover-v2.png)

## Changelog
[Recent update 11.06.2022](CHANGELOG.md)

## How to Use

### Install depend

Install to Hexo blog root directory, **Not theme directory**
```bash
npm install hexo-renderer-pug 
npm install hexo-renderer-dartsass
npm install hexo-generator-search

# if you need RSS, you must be install this plugin
npm install hexo-generator-feed

# Flowchat
npm install hexo-filter-flowchart        
# Math
npm install hexo-renderer-mathjax
```

### User's profile

Configure the file `hexo-theme-claudia/_config.yml` under the theme profile

```yaml
user:
  name: 
  avatar: /images/avatar.jpg
  location:
  description:
  footnotes:

# config you SNS
social:
  zhihu:
  twitter:
  facebook:
  linkedin:
  instagram:
  github: haojen

# Page icon
favicon: images/favicon.ico

friend_links:
  - title: Link1
    link: https://www.link1.test.com/

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
  repo: Haojen/myBlogRepo # Change to your blog repo
```

#### 2. Valine
Documents： https://valine.js.org/quickstart.html

```yaml
comment_valine:
  enable: true
  appId:
  appKey:
```

### Appearance
```yaml
# 1.light 
# 2.dark
# 3.auto (default, match device appearance setting)
appearance: auto
```

### Code highlighting

1. **Disable** the default hexo highlight configuration(modify your `_config.yml` in root directory of hexo), and then run `hexo clean` to delete cache

```yaml
highlight:
  enable: false
```

## Analytics
Google Analytics and Baidu Analytics simple config:
```yaml
#Baidu Analytics**
ba_track_id: 

#Google Analytics
ga_track_id: 
ga_domain:
```

### Create About Page

Create a new folder `about` under the source of hexo, and then, create a `index.md` file and copy the following content into it.
also you `about.png` put in `about/` folder

```yaml
---
title: about
date: 2017-05-31 10:05:56
layout: about
---
```

### My demo blog config
https://github.com/Haojen/Claudia-theme-blog

## Other My Project
- [Hexo-theme-Anisina](https://github.com/Haojen/hexo-theme-Anisina)
- [Vimkey - a browser extension, let you use keyboard control browser](https://github.com/Haojen/vimkey)
- [PlanetTab - a cool dynamic 3D planet browser new tab](https://github.com/Haojen/planet-tab)


## Buy me coffee ☕️
<img src="./screenshot/BuyMeCoffeeQRCode.png" width="300">

## License
MIT © [HAOZHEN MA](http://haojen.github.io)
