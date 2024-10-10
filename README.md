# daohang-worker

这个代码库，用于部署到 Cloudflare Workers/Pages 的源码，是个人导航网站的源码。

## 一、网页效果图

<img src="images\img01.png" />

## 二、修改代码（可选）

如果想修改导航的**链接名称**和**链接地址**，就修改 `LINKS` 变量值；如果想修改**网站名**，就修改 `WEBSITE_TITLE` 变量的值。

- 添加/修改/删除链接名称和链接地址

```js
const LINKS = {
	常用网站: {
		Google: 'https://www.google.com/?hl=en-US',
		Bing: 'https://www.bing.com/?setmkt=en-US&setlang=en-US',
		DuckDuckGo: 'https://duckduckgo.com/',
		'Brave Search': 'https://search.brave.com/',
		YouTube: 'https://www.youtube.com',
		GitHub: 'https://www.github.com',
		Cloudflare: 'https://dash.cloudflare.com',
		'OpenAI ChatGPT': 'https://chatgpt.com',
		'DuckDuckGo AI Chat': 'https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1',
	},
	这里填分类的名称 : {
		"网站名称1": "https://.....",
		"网站名称2": "https://.....",
        //...
	},
	// 后面可以继续添加更多的分类
};
```

- 修改网站的名称

```js
const WEBSITE_TITLE = '我的网址导航';
```

## 三、部署

部署前，可以按需修改 `_worker.js` 代码中的 `LINKS` 变量值和 `WEBSITE_TITLE` 变量值，然后按照下面不同方式，部署到 `Cloudflare` 中。

#### 1、使用Cloudflare Workers部署

将 `_worker.js` 的代码复制到您的 `cloudflare worker` 应用程序中，替换掉原来的 `worker.js` 代码，保存部署。

#### 2、使用Cloudflare Pages部署

- 方法一：

  将`_worker.js`的代码下载到本地电脑，文件名称要一样，不能修改，然后在文件外面套一层文件夹，也就是将 `_worker.js` 下载到一个空文件夹中，然后使用 git 工具，在这个文件夹的路径中执行 `git init` 命令，最后将这个文件夹以zip格式压缩，或者直接以文件夹的形式上传到 `Cloudflare Pages` 中，完成部署。（不用`git init` 命令也可以）

- 方法二：

  Fork代码到自己的GitHub账号的存储库，然后在 Cloudflare 的 Pages 中，"通过导入现有 Git 存储库创建" 按里面的步骤操作，完成部署。



