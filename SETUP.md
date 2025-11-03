# 博客项目配置说明

## ✅ 已完成

### 1. Data 文件（数据层）
- ✅ `data/social.ts` - 社交媒体配置
- ✅ `data/projects.tsx` - 项目数据
- ✅ `data/friends.tsx` - 友链数据
- ✅ `data/features.tsx` - 特性数据
- ✅ `data/skills.tsx` - 技能栈数据

### 2. Pages 页面
- ✅ `src/pages/index.tsx` - 主页
- ✅ `src/pages/about.mdx` - 关于页面
- ✅ `src/pages/friends/` - 友链页面
- ✅ `src/pages/project/` - 项目页面

### 3. 工具函数
- ✅ `src/utils/jsUtils.ts` - JavaScript 工具函数
- ✅ `src/hooks/useWindowSize.ts` - 窗口大小 Hook
- ✅ `src/hooks/useViewType.ts` - 视图类型 Hook  
- ✅ `src/hooks/useReadPercent.ts` - 阅读进度 Hook
- ✅ `src/lib/utils.ts` - cn 函数

## ⏳ 待完成

### 1. 必需组件（需要手动复制）

由于组件文件较多，请从 `e:\Github\demo\blog\src` 复制以下文件夹到 `E:\Github\blog\src`：

```
src/
├── components/
│   ├── landing/          # 首页组件
│   │   ├── Hero/         # 英雄区组件
│   │   ├── BlogSection/  # 博客区块
│   │   ├── ProjectSection/ # 项目区块
│   │   ├── FeaturesSection/ # 特性区块
│   │   └── Section/      # 通用区块
│   ├── magicui/          # Magic UI 组件
│   │   ├── magic-card.tsx
│   │   ├── particles.tsx
│   │   ├── bento-grid.tsx
│   │   ├── marquee.tsx
│   │   └── moving-border.tsx
│   ├── Comment/          # 评论组件
│   ├── Tooltip/          # 工具提示
│   ├── SocialLinks/      # 社交链接
│   ├── Svg/              # SVG 组件
│   └── svgIcons/         # SVG 图标
│       └── FavoriteIcon/ # 收藏图标
└── theme/                # 自定义主题（可选）
    ├── MyLayout/         # 自定义布局
    ├── BlogPostItem/     # 博客文章项
    ├── BlogListPage/     # 博客列表页
    └── ...               # 其他主题覆盖

```

### 2. CSS 样式

需要复制：
- ✅ `src/css/custom.css` - 已配置基础样式
- ⏳ `src/css/tweet-theme.css` - 需要复制（如果使用 Tweet 组件）

### 3. 安装依赖

```bash
# 如果 sharp 安装失败，可以跳过 ideal-image 插件
npm install --legacy-peer-deps
```

### 4. 更新配置

#### package.json
添加缺失依赖：
```json
{
  "dependencies": {
    "@docusaurus/plugin-ideal-image": "3.9.2",  // 可选
    "@docusaurus/plugin-pwa": "3.9.2",          // 可选
    "@docusaurus/plugin-vercel-analytics": "^3.9.2"  // 可选
  }
}
```

#### docusaurus.config.ts
参考 demo 项目配置，添加：
- 自定义blog插件配置
- PWA 配置（可选）
- Analytics 配置（可选）

## 📝 填写内容

### 优先填写：
1. **data/social.ts** - 填写你的社交媒体链接
2. **data/projects.tsx** - 添加你的项目
3. **data/friends.tsx** - 添加你的友链
4. **src/pages/about.mdx** - 完善自我介绍

### 可选填写：
- **data/features.tsx** - 自定义特性描述
- **data/skills.tsx** - 添加更多技能栈

## 🚀 启动项目

```bash
npm start
```

## 📌 注意事项

1. 由于 `sharp` 包安装可能超时，可以：
   - 使用国内镜像：`npm config set registry https://registry.npmmirror.com`
   - 或者移除 `@docusaurus/plugin-ideal-image` 插件

2. 部分组件需要 `@iconify/react`，确保已安装

3. 主题组件（theme文件夹）是可选的，用于深度自定义博客样式

## 🔗 参考

- Demo 项目：`e:\Github\demo\blog`
- Docusaurus 文档：https://docusaurus.io

