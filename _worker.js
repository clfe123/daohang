// 定义分类和网站链接的字典
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
	视频网站: {
		YouTube: 'https://www.youtube.com',
		Netflix: 'https://www.netflix.com',
		TikTok: 'https://www.tiktok.com',
		爱奇艺: 'https://www.iqiyi.com',
		腾讯视频: 'https://v.qq.com',
		优酷: 'https://www.youku.com',
		哔哩哔哩: 'https://www.bilibili.com',
		搜狐视频: 'https://tv.sohu.com/',
	},
	AI工具: {
		'OpenAI ChatGPT': 'https://chatgpt.com',
		'Google Gemini': 'https://gemini.google.com/',
		'Google AI Studio': 'https://aistudio.google.com/app/prompts/new_chat',
		'Anthropic Claude': 'https://claude.ai/',
		'Cohere Command R+': 'https://coral.cohere.com/',
		'AI21Studio Jamba': 'https://studio.ai21.com/v2/chat',
		'Mistral Large2': 'https://chat.mistral.ai/chat',
		HuggingChat: 'https://huggingface.co/chat/',
		'pi.ai': 'https://pi.ai/',
		'DuckDuckGo AI Chat': 'https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1',
		Zapier: 'https://zapier.com/',
		ChatLabs: 'https://labs.writingmate.ai/',
		Groq: 'https://groq.com/',
		'Groq Playground': 'https://console.groq.com/playground',
		coze国际: 'https://www.coze.com/',
		'coze中国(扣子)': 'https://www.coze.cn/',
		灵沐AI: 'https://chat.immuseai.com/',
		Peo: 'https://poe.com/',
		'ChatBot Arena': 'https://lmarena.ai/',
		OpenRouter: 'https://openrouter.ai/',
		'Not Diamond': 'https://chat.notdiamond.ai/',
		AskManyAI: 'https://askmanyai.cn/',
		通义千问: 'https://tongyi.aliyun.com/',
		文心一言: 'https://yiyan.baidu.com/',
		智谱清言: 'https://chatglm.cn/detail',
		'百川智能-百小应': 'https://ying.baichuan-ai.com/chat',
		'360智脑': 'https://ai.360.com/?src=chat-m',
		YAYI雅意: 'https://yayi.wenge.com/chat/#/chat/21',
		腾讯元宝: 'https://yuanbao.tencent.com/chat',
		'澜舟科技-孟子GPT': 'https://www.langboat.com/zh/product/mchat',
		'商汤-商量': 'https://chat.sensetime.com/wb/chat',
		'360AI助手': 'https://bot.360.com/',
		小悟空: 'https://wukong.com/',
		酷盖AI: 'https://gpt33.cn/',
	},
	AI搜索: {
		'Microsoft Copilot': 'https://copilot.microsoft.com/',
		'Bing search Copilot': 'https://www.bing.com/chat?q=Microsoft+Copilot&FORM=hpcodx',
		'Skype Copilot': 'https://web.skype.com/',
		YouChat: 'https://you.com/?chatMode=default',
		Felo: 'https://felo.ai/zh-Hans/search',
		ThinkAny: 'https://thinkany.ai/',
		Phind: 'https://www.phind.com/',
		Perplexity: 'https://www.perplexity.ai/',
		Kimi: 'https://kimi.moonshot.cn/',
		豆包: 'https://www.doubao.com/chat/',
		讯飞星火: 'https://xinghuo.xfyun.cn/',
		天工AI: 'https://www.tiangong.cn/',
		'360AI搜索': 'https://www.sou.com/',
		海螺AI: 'https://hailuoai.com/',
		秘塔AI搜索: 'https://metaso.cn/',
		百度AI助手: 'https://chat.baidu.com/',
		跃问: 'https://yuewen.cn/chats/new',
		在问AI: 'https://www.zaiwen.top/index',
	},
	AI模型部署工具: {
		Ollama: 'https://ollama.com/',
		Jan: 'https://jan.ai/',
		'LM Studio': 'https://lmstudio.ai/',
		GPT4All: 'https://www.nomic.ai/gpt4all',
		Sanctum: 'https://sanctum.ai/',
		AnythingLLM: 'https://anythingllm.com/',
	},
	开源AI模型下载: {
		'Hugging Face': 'https://huggingface.co/models',
		'HF-Mirror': 'https://hf-mirror.com/',
		'阿里魔搭-ModelScope': 'https://www.modelscope.cn/home',
		'始智AI-WiseModel': 'https://wisemodel.cn/models',
		'Gitee AI': 'https://ai.gitee.com/',
		'Nexa AI': 'https://nexaai.com/models',
	},
	免费的代理工具: {
		'WARP 下载线路1': 'https://one.one.one.one/',
		'WARP 下载线路2': 'https://developers.cloudflare.com/warp-client/get-started/',
		'Proton VPN': 'https://protonvpn.com/',
		'VPN Gate': 'https://www.vpngate.net/cn/',
		'Tor(需配置网桥地址)': 'https://www.torproject.org/',
	},
	开源的代理工具: {
		'v2rayN-Pro': 'https://github.com/lowercase78/V2RayN-PRO',
		v2rayN: 'https://github.com/2dust/v2rayN',
		'hiddify-next': 'https://github.com/hiddify/hiddify-next',
		'NekoRay PC版': 'https://github.com/MatsuriDayo/nekoray',
		'GUI.for.SingBox': 'https://github.com/GUI-for-Cores/GUI.for.SingBox',
		'GUI.for.Clash': 'https://github.com/GUI-for-Cores/GUI.for.Clash',
		'Clash Verge rev': 'https://github.com/clash-verge-rev/clash-verge-rev',
		'Clash Nyanpasu': 'https://github.com/LibNyanpasu/clash-nyanpasu',
		FlClash: 'https://github.com/chen08209/FlClash',
		'Pandora-Box': 'https://github.com/snakem982/Pandora-Box',
		Karing: 'https://github.com/KaringX/karing',
		'Clah.Mata 安卓版': 'https://github.com/MetaCubeX/ClashMetaForAndroid',
		'v2rayNG 安卓版': 'https://github.com/2dust/v2rayNG',
		'MahsaNG 安卓版': 'https://github.com/GFW-knocker/MahsaNG',
		'Neko_v2rayNG 安卓版': 'https://github.com/Blawuken/Neko_v2rayNG',
		'NekoBox 安卓版': 'https://github.com/MatsuriDayo/NekoBoxForAndroid',
		'V2free 安卓版': 'https://github.com/bannedbook/v2ray.vpn',
		'v2flyNG 安卓版': 'https://github.com/2dust/v2flyNG',
		'shadowsocksr-v2ray-trojan-android': 'https://github.com/xxf098/shadowsocksr-v2ray-trojan-android',
		'Clash Verge v1.3.8(断更版)': 'https://github.com/zzzgydi/clash-verge/releases/tag/v1.3.8',
		'hiddify 旧版(可换内核)': 'https://github.com/hiddify/HiddifyClashDesktop',
		'clash for windows汉化版': 'https://github.com/Z-Siqi/Clash-for-Windows_Chinese',
		'clash for windows原英文版': 'https://archive.org/download/clash_for_windows_pkg',
	},
	社交平台: {
		Facebook: 'https://www.facebook.com',
		Twitter: 'https://www.twitter.com',
		LinkedIn: 'https://www.linkedin.com',
		Instagram: 'https://www.instagram.com',
		reddit: 'https://www.reddit.com',
		Discord: 'https://discord.com/',
		Quora: 'https://www.quora.com/',
		微博: 'https://weibo.com/',
		知乎: 'https://www.zhihu.com/',
	},
	电子邮箱: {
		Gmail: 'https://mail.google.com/',
		Outlook: 'https://outlook.live.com/',
		'Proton Mail': 'https://proton.me/',
		'Tuta Mail': 'https://tuta.com/',
		'iCloud Mail': 'https://www.icloud.com/mail',
		'163邮箱': 'https://mail.163.com/',
		QQ邮箱: 'https://mail.qq.com/',
		'[临时]temp-mail.org': 'https://temp-mail.org/en/',
		'[临时]tempmailo.com': 'https://tempmailo.com/',
		'[临时]temp-mail.io': 'https://temp-mail.io/en',
		'[临时]mail.tm': 'https://mail.tm/zh/',
		'[临时]tempmail.plus': 'https://tempmail.plus/',
		'[临时]maillog.org': 'https://maillog.org/',
		'[临时]upxmail.com': 'https://upxmail.com',
		'[临时]tempmail.ac.id': 'https://tempmail.ac.id',
		'[临时]internxt.com': 'https://internxt.com/zh/temporary-email',
		'[临时]mohmal.com': 'https://www.mohmal.com/en/inbox',
		'[临时]tmailor.com': 'https://tmailor.com',
		'[临时]tempmail.us.com': 'https://www.tempmail.us.com/zh/',
		'[临时]disposablemail.com': 'https://www.disposablemail.com/',
		'[临时]luxusmail.org': 'https://luxusmail.org/',
		'[临时]gettempmail.com': 'https://gettempmail.com/mailbox',
		'[临时]temp-inbox.me': 'https://temp-inbox.me/',
		'[临时]anonymmail.net': 'https://anonymmail.net/',
		'[临时]emailfake.com': 'https://emailfake.com/',
		'[临时]crazymailing.com': 'https://www.crazymailing.com/',
	},
};
// 网站标题（网站名称）
const WEBSITE_TITLE = '我的网址导航';

// 获取LINKS的第一个内部字典(第一个分类)
function getFirstInnerDict(outerDict) {
	for (let key in outerDict) {
		if (outerDict.hasOwnProperty(key)) {
			return outerDict[key]; // 返回第一个内部字典
		}
	}
	return null; // 如果外部对象为空，返回 null
}

async function handleRequest(request) {
	// 获取LINKS的第一个内部字典，即第一个分类（常用网站）
	const firstInnerDict = getFirstInnerDict(LINKS);
	// 如果第一个内部字典为空
	if (firstInnerDict == null) {
		return new Response('LINKS变量的值有问题！', {
			headers: { 'content-type': 'text/html;charset=UTF-8' },
		});
	}

	// 动态生成左侧分类名称
	let categoriesHtml = "<div class='categories'>";
	for (const category of Object.keys(LINKS)) {
		categoriesHtml += `<div class="category" onclick="showLinks('${category}')">${category}</div>`;
	}
	categoriesHtml += '</div>';

	// 动态生成初始右侧链接列表（默认显示常用网站）
	let linksHtml = "<div class='links-container'>";
	for (const [name, url] of Object.entries(firstInnerDict)) {
		linksHtml += `<div><a href="${url}" target="_blank">${name}</a></div>`;
	}
	linksHtml += '</div>';

	// HTML 页面内容，包含固定布局、搜索框和交互逻辑
	const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>${WEBSITE_TITLE}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {  
            width: 100vw; 
            padding: 0;
            margin: 0;
            font-family: Arial, sans-serif;
        }

        /* 固定左侧导航栏 */
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 280px;
            height: 100vh;
            background-color: #FAFAFA;
            overflow-y: auto;
            text-align: center;
			border-left: none;
            border-right: 1px solid #ccc;
            transition: width 0.3s ease;
            z-index: 1000;
        }

        /* 容器调整，避免被导航栏覆盖 */
        .container {
            margin-left: 280px;
            padding: 0;
            display: block;
            max-width: calc(100% - 280px);
            min-width: 300px;
        }

        /* 标题样式 */
        .sidebar h1 {
            margin-top: 40px;
            margin-bottom: 30px;
            font-size: 24px;
            color: #333;
        }

        .category {
            margin-top: 5px;
            margin-bottom: 5px;
            line-height: 2em;
            cursor: pointer;
            font-weight: bold;
            color: #333300;
        }
        .category:hover {
            color: #999933;
        }

        /* 右侧搜索框样式 */
        .search-bar {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            min-width: 150px;
            transition: none;
        }

        /* 右侧内容区域 */
        .content {
            padding: 20px;
            box-sizing: border-box;
            border-left: 1px solid #ccc;
			border-right: none;
            border-top: none;
            border-bottom: none;
        }

        /* 链接的布局 */
        .links-container {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            line-height: 32px;
            align-items: center;
        }
        .links-container div {
            width: calc(20% - 10px);
        }

        /* 链接样式 */
        a {
            text-decoration: none;
            color: #000;
            font-weight: bold;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
            text-overflow: ellipsis;
            transition: color 0.3s ease;
        }

        /* 鼠标悬停显示下划线 */
        a:hover {
            color: #999933;
            text-align: center;
        }

        /* 响应式设计 */

		/* 超大屏幕设备（>1200px） */
        @media (min-width: 1201px) {
            .sidebar {
                width: 300px;
            }
            .container {
                margin-left: 300px;
                max-width: calc(100% - 300px);
            }
            .sidebar h1 {
                font-size: 26px;
            }
            .category {
                font-size: 16px;
            }
            .search-bar {
                padding: 12px;
            }
            .content {
                padding: 25px;
            }
            .links-container div {
                width: calc(20% - 10px); /* 每行显示5个链接 */
            }
        }

        /* 大屏幕设备（992px - 1200px） */
        @media (max-width: 1200px) and (min-width: 992px) {
            .sidebar {
                width: 280px;
            }
            .container {
                margin-left: 280px;
                max-width: calc(100% - 280px);
            }
            .sidebar h1 {
                font-size: 24px;
            }
            .category {
                font-size: 15px;
            }
            .search-bar {
                padding: 10px;
            }
            .content {
                padding: 20px;
            }
            .links-container div {
                width: calc(33.33% - 10px); /* 每行显示3个链接 */
            }
        }

        /* 中等屏幕设备（600px - 992px） */
        @media (max-width: 991px) and (min-width: 600px) {
            .sidebar {
                width: 220px;
            }
            .container {
                margin-left: 220px;
                max-width: calc(100% - 220px);
            }
            .sidebar h1 {
                font-size: 22px;
            }
            .category {
                font-size: 14px;
            }
            .search-bar {
                padding: 8px;
            }
            .content {
                padding: 18px;
            }
            .links-container div {
                width: calc(50% - 10px); /* 每行显示2个链接 */
            }
        }

        /* 小屏幕设备（480px - 600px） */
        @media (max-width: 599px) and (min-width: 480px) {
            .sidebar {
                width: 180px;
            }
            .container {
                margin-left: 180px;
                max-width: calc(100% - 180px);
            }
            .sidebar h1 {
                font-size: 20px;
            }
            .category {
                font-size: 13px;
            }
            .search-bar {
                padding: 7px;
            }
            .content {
                padding: 15px;
            }
            .links-container div {
                width: 100%; /* 每行显示1个链接 */
            }
        }

        /* 手机设备（480px以下） */
        @media (max-width: 480px) {
            .sidebar {
                position: relative; /* 取消固定定位 */
                width: 100%;
                height: auto;
                border-left: none;
                border-right: none;
                border-top: 2px solid #ccc;
                border-bottom: 1px solid #ccc;
            }

            .container {
                margin-left: 0;
                max-width: 100%;
                display: flex;
                flex-direction: column;
            }

            .content {
                padding: 10px;
                border-left: none;
                border-right: none;
            }

            .links-container div {
                width: 100%; /* 每行显示1个链接 */
            }

            .search-bar {
                width: 100%;
                padding: 8px;
            }

            .sidebar h1 {
                font-size: 18px;
            }

            .category {
                font-size: 12px;
            }

            .content {
                padding: 12px;
            }
        }
    </style>
</head>

<body>
    <div class="sidebar">
        <h1>${WEBSITE_TITLE}</h1>
        ${categoriesHtml}
    </div>
    <div class="container">
        <!-- 右侧内容区域 -->
        <div class="content">
            <!-- 搜索框 -->
            <input type="text" id="searchInput" class="search-bar" placeholder="搜索本站的链接名称..." oninput="filterLinks()">
            <div id="links">${linksHtml}</div>
        </div>
    </div>

    <script>
        const linksData = ${JSON.stringify(LINKS)};

        // 根据类别显示对应的链接
        function showLinks(category) {
            const linksContainer = document.getElementById('links');
            let linksHtml = "<div class='links-container'>";
            for (const [name, url] of Object.entries(linksData[category])) {
                linksHtml += \`<div><a href="\${url}" target="_blank">\${name}</a></div>\`;
            }
            linksHtml += "</div>";
            linksContainer.innerHTML = linksHtml;
        }

        // 搜索框功能：根据关键词筛选链接
        function filterLinks() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const linksContainer = document.getElementById('links');
            let filteredLinksHtml = "<div class='links-container'>";
            
            // 遍历所有分类，找到匹配的链接
            for (const category of Object.keys(linksData)) {
                for (const [name, url] of Object.entries(linksData[category])) {
                    if (name.toLowerCase().includes(input)) {
                        filteredLinksHtml += \`<div><a href="\${url}" target="_blank">\${name}</a></div>\`;
                    }
                }
            }

            filteredLinksHtml += "</div>";
            linksContainer.innerHTML = filteredLinksHtml;
        }

        // 页面加载时显示默认分类的链接（可选）
        window.onload = function() {
            const defaultCategory = Object.keys(linksData)[0];
            showLinks(defaultCategory);
        }
    </script>
</body>
</html>
`;

	// 返回 HTML 内容
	return new Response(htmlContent, {
		headers: { 'content-type': 'text/html;charset=UTF-8' },
	});
}

export default {
	async fetch(request, env, _ctx) {
		return handleRequest(request);
	},
};
