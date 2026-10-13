# 月下塔罗 · Moonlit

深蓝金色星月主题的塔罗与雷诺曼互动学习网站。纯 HTML/CSS/JavaScript，无需安装依赖或 API 密钥。

## 功能
- 78 张塔罗牌、正逆位、三张牌阵与单张指引
- 36 张雷诺曼、两张／三张连读与关键词练习
- 中英文百科、搜索、主题筛选与浏览器本地手记

## GitHub Pages 部署
1. 新建 Public 仓库 moonlit-tarot。
2. 将本目录内的所有文件上传到仓库根目录，确保 index.html 位于最外层。不要只上传 ZIP。
3. Settings → Pages → Build and deployment → Source 选择 Deploy from a branch。
4. Branch 选择 main，目录选择 /(root)，点击 Save。
5. 等待部署完成，以 Pages 页面显示的实际网址为准。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 本地开发与 vibe coding
运行 python -m http.server 8000，再打开 http://localhost:8000。
- index.html：页面与导航
- style.css：深蓝金色视觉与移动端布局
- cards.js：塔罗牌数据
- app.js：塔罗抽牌、百科与手记
- lenormand.js：雷诺曼百科
- interactions.js：体系切换、雷诺曼互动与手记

可给 AI 的修改要求：保留月下塔罗深蓝金色风格；保持纯静态与相对资源路径；兼容 GitHub Pages 子目录；保持现有手记键名与数据结构；修改后检查两种抽牌、百科搜索和手记保存。

## 数据说明
手记只存在各自浏览器 localStorage 中，不会上传服务器。旧 Sites 域名下的手记不会自动迁移至 GitHub Pages，请先另行复制保留。新网站无需登录 ChatGPT。

## 内容说明
牌义用于娱乐与学习，页面包含参考链接。本项目尚未指定开源许可证。
