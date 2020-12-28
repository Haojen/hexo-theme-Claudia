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

Configure the file `_config.yml` under the theme profile, not the one in  root of whole hexo direction

```yaml
user:
  name: 
  avatar: /images/avatar.jpg
  location:
  description:

// config you SNS
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

### Code highlighting

1. Disable the default hexo highlight configuration(modify your `_config.yml` in main directory of hexo)

```yaml
highlight:
enable: false
```

### Create About Page

Create a new folder `about` under the source of hexo, and then, create a `index.md` file and copy the following content into it.
also you `about.png` in put `about` folder

```yaml
--
title: about
date: 2017-05-31 10:05:56
layout: about
---

About Somebody
```

### Set post cover image

`$cover`:  set cover image

```yaml
--
title: post title
categories: [notes]
date: 2020-12-25 10:05:56
tags: [hexo, cutie, tutorial]
---
// set cover example
![$cover](/images/yourImg.png)
```

### My demo blog config 
https://github.com/Haojen/Claudia-theme-blog

## License
MIT © [haojen ma](http://haojen.github.io/)
