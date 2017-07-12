# Claudia
![cover](./screenshot/claudia-cover.png)

## 用户信息配置

注意: 必须在主题的 `_config.yml` 中配置以下信息, 而非博客根目录下的 `_config.yml`

	user_name: your name
	user_avatar: your avatar
	user_location: your location
	user_description: about you introduction
	
	// this info will show About page
	user_contact: 
	user_introduction
	
	// config you share info
	weibo_username: 
	zhihu_username: 
	github_username:
	twitter_username: 
	facebook_username:  
	linkedin_username:  

## 创建 Works 页面
在 source 页面创建一个 `works` 文件夹, 然后打开新建一个 `index.md`,在 source 页面创建一个 `_data` 文件夹, 然后打开, 在里面新建一个 `project.json` 文件

## 创建 About 页面
在 source 页面创建一个 `about` 文件夹, 然后打开新建一个 `index.md`

## 功能配置
可以依次在主题的根目录中执行终端命令, 根据自身需求分别安装依赖
	
	 // 流程图功能
    npm install hexo-filter-flowchart --save
    
    // Emoji
    npm install hexo-filter-github-emojis --save
    
    // 搜索功能
    npm install hexo-generator-search --save
    
    // 数学公式
    npm install hexo-renderer-mathjax --save
    
具体的使用教程, 请参阅 [博客中对应的博文](https://haojen.github.io/Claudia-theme-blog/)    
   